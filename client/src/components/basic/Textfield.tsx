import styled from "styled-components";
import { COLORS, SIZES } from "../../global/constants";

export default function Textfield({
  title,
  fieldName,
  type,
  placeholder,
  defaultValue,
  options,
}: {
  title: string;
  fieldName: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  options?: string[];
}) {
  return (
    <TextFieldLayout>
      <label>{title}</label>
      {type !== "selectbox" && (
        <input
          name={fieldName}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      )}
      {type === "selectbox" && (
        <select name={title} defaultValue={defaultValue}>
          <option disabled>{defaultValue}</option>
          {options &&
            options.length > 0 &&
            options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      )}
    </TextFieldLayout>
  );
}

const TextFieldLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.SM / 2}px;
  text-align: left;

  & label {
    font-weight: bold;
    font-size: ${SIZES.SM}px;
    line-height: ${SIZES.LG}px;
  }

  & input,
  & select {
    padding: ${SIZES.LG / 2}px ${SIZES.XL / 2}px;
    background-color: ${COLORS.GRAY_01};
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: ${SIZES.SM}px;
    line-height: ${SIZES.LG}px;

    -webkit-transition: all 200ms ease-out;
    transition: all 200ms ease-out;

    &:focus {
      background-color: ${COLORS.GRAY_01_OVERAY};
    }
  }
`;
