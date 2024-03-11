import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { userEventSetup } from "./utils/utils";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import {
  emptyMockUserLoaderData,
  mockUserLoaderData,
} from "./mocks/useLoaderData";
import MainPage from "../pages/Main/MainPage";

describe("[scenario #1] landing page to login", () => {
  it("should be shown landing page before login.", async () => {
    userEventSetup(
      [{ path: "/", jsx: <LandingPage /> }],
      emptyMockUserLoaderData,
    );

    const loginButtonElements = await screen.findAllByRole("button", {
      name: /로그인 하러가기/i,
    });
    // screen.debug();

    expect(loginButtonElements[0]).toBeInTheDocument();
  });

  it("should be navigate to login page when click the login button", async () => {
    const { user } = userEventSetup(
      [
        { path: "/", jsx: <LandingPage /> },
        { path: "/login", jsx: <LoginPage /> },
      ],
      emptyMockUserLoaderData,
    );

    const loginButtonElements = await screen.findAllByRole("button", {
      name: /로그인 하러가기/i,
    });

    await user.click(loginButtonElements[0]); //TODO: error fix

    const loginHeaderElement = await screen.findByRole("heading", {
      name: /자산 관리를 시작해보세요/i,
    });

    expect(loginHeaderElement).toBeInTheDocument();

    const kakaoLoginButtonElement = await screen.findByRole("button", {
      name: /카카오 계정으로 로그인/i,
    });
    expect(kakaoLoginButtonElement).toHaveAttribute("id", "kakao");
    // screen.debug();
  });
});

describe("[scenario #2] after login, navigate to main-expense page", () => {
  it("should be redirect to app page after login success.", async () => {
    userEventSetup(
      [
        { path: "/", jsx: <MainPage /> },
        { path: "/main/expenses", jsx: <MainPage /> },
        { path: "/main/expenses/weekly", jsx: <MainPage /> },
        { path: "/login", jsx: <LoginPage /> },
      ],
      mockUserLoaderData, // localstorage에 userData가 저장되어있는지 여부로 로그인 여부를 판단하므로, mockuserData를 loader로 사용.
    );
    const expenseFloatingButtonElement = await screen.findByTitle(
      "지출 내역 추가",
      {
        exact: true,
      },
    );

    screen.debug();
    expect(expenseFloatingButtonElement).toBeInTheDocument();
  });
});
