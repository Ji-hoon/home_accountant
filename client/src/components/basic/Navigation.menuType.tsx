import styled from "styled-components";
import { COLORS, SIZES } from "../../global/constants";

export default function Navigation_MenuType({
  children,
}: {
  children: React.ReactElement | string;
}) {
  return <NavigationMenutypeContainer>{children}</NavigationMenutypeContainer>;
}

// eslint-disable-next-line react-refresh/only-export-components
const NavigationMenutypeContainer = styled.nav`
  display: flex;
  gap: ${SIZES.SM / 2}px;

  & a:before {
    content: "";
    position: absolute;
    height: 4px;
    width: 48px;
    bottom: -20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: ${COLORS.BRAND_DEEP};

    -webkit-transform: translate(-24px, 0);
    transform: translate(-24px, 0);

    -webkit-transition: all 100ms ease-out;
    transition: all 200ms ease-out;
  }

  & a.active:before {
    -webkit-transform: translate(-24px, -4px);
    transform: translate(-24px, -4px);
  }

  & button {
    background-color: transparent;

    &:hover {
      background-color: ${COLORS.GRAY_01_OVERAY};
    }
  }
`;
