import styled from "styled-components";
import DialogPortal from "./Dialog.Portal";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentDialogAtom,
  emailListAtom,
  selectedExpenseIdAtom,
  modalIndexAtom,
} from "../../atoms/globalAtoms";
import { COLORS, LABELS, SIZES, TYPES } from "../../global/constants";
import { useHandleDialog } from "../hooks/useHandleDialog";
import FormListLayout from "../layout/FormList.layout";
import Button_Icontype from "../basic/Button.iconType";
import { FiX } from "react-icons/fi";
import Button_Boxtype from "../basic/Button.boxType";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { InputFormType } from "../../global/customType";

export default function Dialog() {
  const dialog = useRecoilValue(currentDialogAtom);
  const selectedExpenseId = useRecoilValue(selectedExpenseIdAtom);
  const { hideDialog, getDialogFormData, submitDialog } = useHandleDialog();
  const dialogRef = useRef<HTMLDivElement>(null);
  const emailList = useRecoilValue(emailListAtom);

  const { handleSubmit } = useForm<InputFormType>();
  const [modalIndex, setModalIndex] = useRecoilState(modalIndexAtom);

  async function onSubmit() {
    const contentLength = dialog.content.length;
    if (dialogRef.current && contentLength > 0) {
      const modalContainer =
        dialogRef.current.getElementsByClassName("modal-container");
      const lastFormRef =
        modalContainer[modalIndex].getElementsByTagName("form")[0];
      const currentFormData = getDialogFormData(lastFormRef);
      console.log("submit!", modalIndex, currentFormData);

      if (selectedExpenseId.length > 0) {
        const result = await submitDialog({
          action: dialog.content[modalIndex].title,
          data: selectedExpenseId,
        });
        if (result?.status === 204) {
          hideDialog({ order: modalIndex });
        }
        return;
      }

      if (emailList.length > 0 || currentFormData.email) {
        //console.log(emailList);
        const result = await submitDialog({
          action: dialog.content[modalIndex].title,
          data: currentFormData.email ? [currentFormData.email] : emailList,
        });
        if (result?.status === 201 || result?.status === 200)
          hideDialog({ order: modalIndex });
        return;
      }

      const result = await submitDialog({
        action: dialog.content[modalIndex].title,
        data: currentFormData,
      });
      if (result?.status === 201 || result?.status === 200)
        hideDialog({ order: modalIndex });
    }
  }

  console.log(dialog.content);

  return (
    <DialogPortal>
      <div ref={dialogRef}>
        {dialog.isOpen &&
          dialog.content.length > 0 &&
          dialog.content.map((item, index) => (
            <ModalContainer key={index} className="modal-container">
              <BackdropModal
                $index={index}
                $maxindex={dialog.content.length}
                onClick={(event: React.SyntheticEvent) => {
                  event.preventDefault();
                  hideDialog({ order: index });
                }}
              />
              <ModalLayoutContainer
                $index={index}
                $type={item.type}
                onSubmit={handleSubmit(onSubmit)}
              >
                <section className="modal-header">
                  <h3>{item.title}</h3>
                  <Button_Icontype
                    onClick={(event: React.SyntheticEvent) => {
                      event.preventDefault();
                      hideDialog({ order: index });
                    }}
                  >
                    <FiX />
                  </Button_Icontype>
                </section>

                <section className="modal-contents">
                  <FormListLayout type={item.type} layout={item.layout} />
                </section>
                <section className="modal-actions">
                  <Button_Boxtype
                    onClick={(event: React.SyntheticEvent) => {
                      event.preventDefault();
                      hideDialog({ order: index });
                    }}
                  >
                    {LABELS.LABEL_CANCEL}
                  </Button_Boxtype>
                  <Button_Boxtype
                    onClick={() => {
                      setModalIndex(index);
                      //console.log(dialogFormRef.current);
                    }}
                    type={TYPES.SUBMIT}
                    isAlert={
                      item.title.includes(LABELS.LABEL_DELETE) ? "true" : ""
                    }
                  >
                    {item.title}
                  </Button_Boxtype>
                </section>
              </ModalLayoutContainer>
            </ModalContainer>
          ))}
      </div>
    </DialogPortal>
  );
}

const ModalContainer = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  overflow-y: auto;
`;

const BackdropModal = styled.div<{
  $index: number;
  $maxindex: number;
}>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.$index === props.$maxindex - 1
      ? COLORS.GRAY_08_OVERAY
      : "transparent"};
  z-index: ${(props) => props.$index + 100};
`;

const ModalLayoutContainer = styled.form<{
  $type: string;
  $index: number;
}>`
  position: absolute;
  z-index: ${(props) => props.$index + 101};
  background-color: ${COLORS.BASIC_WHITE};
  box-shadow: 0 2px 7px 0 ${COLORS.GRAY_07_OVERAY};
  max-width: ${SIZES.MAX_WIDTH * 0.65}px;
  // max-height: calc(100% - 120px);
  border-radius: 12px;
  top: 60px;
  margin-top: ${(props) => props.$index * 24}px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;

  & .modal-header {
    display: ${(props) => (props.$type === "POPUP" ? "none" : "flex")};
    align-items: center;
    gap: ${SIZES.SM / 2}px;
    padding: ${SIZES.XXS}px;
    background-color: inherit;
    position: sticky;
    top: 0;
    z-index: 1;
    border-radius: inherit;

    & h3 {
      margin: 0;
      font-size: ${SIZES.XL}px;
      padding-left: ${SIZES.XXS}px;
      flex-grow: 1;
      text-align: left;
    }

    & button {
      padding: ${SIZES.SM / 2}px;

      & svg {
        width: ${SIZES.XL}px;
        height: ${SIZES.XL}px;
      }
    }
  }

  & .modal-contents {
    overflow-y: auto;
    padding: ${SIZES.XXS}px ${SIZES.XL}px ${SIZES.XXL}px;
    padding-top: ${(props) =>
      props.$type === "POPUP" ? `${SIZES.XXL + SIZES.XS}px` : `${SIZES.XXS}px`};
  }

  & .modal-actions {
    display: flex;
    justify-content: center;
    gap: ${SIZES.SM / 2}px;
    padding: ${SIZES.XXS}px ${SIZES.XXS}px ${SIZES.MD}px;
  }

  @media screen and (max-width: ${SIZES.MEDIA_QUERY_BP_LARGE}px) {
    width: 80vw;
  }
`;
