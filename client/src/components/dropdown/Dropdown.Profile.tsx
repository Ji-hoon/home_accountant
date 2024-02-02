import styled from "styled-components";
import { COLORS, LABELS, PATH, SIZES } from "../../global/constants";
import { MenuGroup_ListType } from "../compound/MenuGroup.listType";
import Button_Boxtype from "../basic/Button.boxType";
import { useDropdownProfile } from "./Dropdown.Profile.hooks";
import { currentUserAtom, dropdownOpenAtom } from "../../atoms/globalAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import ApiBoundary from "../../global/ApiBoundary";
import { format } from "date-fns";
import {
  groupListInfoType,
  groupMemberType,
  DropdownProps,
} from "../../global/customType";
import { FiCheck } from "react-icons/fi";
import { updateCurrentGroup } from "../util/updateLocalStorage";
import { useNavigate } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export default function Dropdown_Profile(props: DropdownProps) {
  return (
    <ApiBoundary>
      <ApiComponent {...props} />
    </ApiBoundary>
  );
}

export function ApiComponent({ data }: DropdownProps) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const setShowDropdown = useSetRecoilState(dropdownOpenAtom);
  const { result, logout } = useDropdownProfile(currentUser.userId);

  const groupList = result.data.data.groups;
  //const existUser = groupList.find((member: { userId: string; }) => member.userId === currentUser.userId);

  return (
    <>
      {result && (
        <DropdownProfileContainer data={data}>
          <MenuGroup_ListType title={LABELS.LABEL_GROUP}>
            {groupList &&
              groupList.map((group: groupListInfoType, index: number) => (
                <li key={index}>
                  <Button_Boxtype
                    onClick={() => {
                      const role = group.members.reduce(
                        (acc: string | null, member: groupMemberType) => {
                          if (
                            member.userId.toString() ===
                            currentUser.userId.toString()
                          ) {
                            return member.role;
                          }
                          return acc;
                        },
                        null,
                      );
                      const newUserInfo = updateCurrentGroup({
                        groupId: group._id,
                        role: role as string,
                      });

                      setCurrentUser(() => newUserInfo);
                      setShowDropdown("");
                      navigate(PATH.MAIN_EXPENSES);
                    }}
                  >
                    <p>
                      <strong
                        className={
                          currentUser.currentGroup === group._id ? "active" : ""
                        }
                      >
                        {group.name}
                        {currentUser.currentGroup === group._id && (
                          <FiCheck strokeWidth={3} />
                        )}
                      </strong>
                      <span>
                        {format(group.createdAt, "yyyy년 M월 d일")}에 생성됨
                      </span>
                    </p>
                  </Button_Boxtype>
                </li>
              ))}
          </MenuGroup_ListType>
          <MenuGroup_ListType title={LABELS.LABEL_ACCOUNT}>
            <li>
              <Button_Boxtype>{LABELS.LABEL_ACCOUNT_INFO}</Button_Boxtype>
            </li>
            <li>
              <Button_Boxtype onClick={() => logout()}>
                {LABELS.LABEL_LOGOUT}
              </Button_Boxtype>
            </li>
          </MenuGroup_ListType>
        </DropdownProfileContainer>
      )}
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const DropdownProfileContainer = styled.div<{
  data: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}>`
  position: absolute;
  left: ${(props) => props.data.x + props.data.width - 200}px;
  top: ${(props) => props.data.y + props.data.height}px;
  height: auto;
  width: 200px;
  max-height: calc(100vh - 100px);

  overflow-x: hidden;
  overflow-y: auto;

  margin-top: 6px;
  background-color: #fff;
  border-radius: 5px;
  background-color: ${COLORS.BASIC_WHITE};
  box-shadow: 0 2px 7px 0 ${COLORS.GRAY_07_OVERAY};
  max-width: ${SIZES.MAX_WIDTH * 0.65}px;
`;
