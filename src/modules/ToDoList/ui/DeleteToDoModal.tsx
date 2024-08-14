import { FC } from "react";
import { UiModal } from "./UiModal";
import { UiButton } from "../../../shared/ui/UiButton";
import styled from "styled-components";

interface Props {
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDeleteToDo: () => void;
}

const StyledDeleteToDoModal = styled.form`
  width: 400px;
  height: 250px;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 50px;
  text-align: center;
  .buttons-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
    height: 50px;
    justify-content: center;
  }
`;

const DeleteToDoModal: FC<Props> = ({ title, setIsOpen, onDeleteToDo }) => {
  return (
    <UiModal setIsOpen={setIsOpen}>
      <StyledDeleteToDoModal>
        <h2>Вы действительно хотите удалить задачу "{title}"?</h2>
        <div className="buttons-wrapper">
          <UiButton type="submit" onClick={onDeleteToDo}>
            Да
          </UiButton>
          <UiButton
            variant="warning"
            color="white"
            onClick={() => setIsOpen(false)}
          >
            Отмена
          </UiButton>
        </div>
      </StyledDeleteToDoModal>
    </UiModal>
  );
};

export { DeleteToDoModal };
