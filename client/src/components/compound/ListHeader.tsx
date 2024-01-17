import styled from "styled-components";
import { SIZES, COLORS } from "../../global/constants";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Button_Icontype from "../basic/Button.iconType";

export default function ListHeader({
  $title,
  $type,
  $value,
}: {
  $title: string;
  $type: string;
  $value: string;
}) {
  return (
    <ListHeaderContainer $type={$type}>
      <div className="header-navigation-container">
        <Button_Icontype>
          <FiChevronLeft stroke-width="3" />
        </Button_Icontype>
        {$title}
        <Button_Icontype>
          <FiChevronRight stroke-width="3" />
        </Button_Icontype>
      </div>
      <div className="header-value-container">
        {parseInt($value).toLocaleString()}원
      </div>
    </ListHeaderContainer>
  );
}

const ListHeaderContainer = styled.div<{
  $type: string;
}>`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 80px;
  align-items: center;

  padding: ${SIZES.XXS * 2}px ${SIZES.SM}px ${SIZES.LG}px;
  background-color: ${COLORS.BASIC_WHITE};

  font-size: ${SIZES.XL}px;
  line-height: ${SIZES.XXL}px;
  font-weight: bold;

  & .header-navigation-container {
    display: flex;
    gap: ${SIZES.XS / 2}px;
    align-items: center;
    margin-left: -${SIZES.XS / 2}px;

    & button {
      padding: ${SIZES.XL / 2}px;
    }
  }

  & .header-value-container {
    color: ${COLORS.BRAND_DEEP};

    &:before {
      content: ${(props) => (props.$type === "EXPENSES" ? '"-"' : '""')};
    }
  }
`;