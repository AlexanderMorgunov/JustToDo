import { FC, useState } from "react";
import { UiModal } from "./UiModal";
import styled from "styled-components";
import { UiButton } from "../../../shared/ui/UiButton";
import { IToDoListItem } from "../../../shared/types/IToDoListItem";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCreateToDo: (title: string) => void;
  item?: IToDoListItem;
}

const StyledCreateToDoModal = styled.form`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px;
  text-align: center;
  .buttons-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
    height: 50px;
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #2d2d2d;
  border-radius: 20px;
  width: 100%;
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    text-align: center;
  }W
`;

const ToDoModal: FC<Props> = ({ setIsOpen, onCreateToDo, item }) => {
  const [value, setValue] = useState(item?.title || "");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const title = (target[0] as HTMLInputElement).value;
    onCreateToDo(title);
    setIsOpen(false);
  };
  return (
    <UiModal setIsOpen={setIsOpen}>
      <>
        <StyledCreateToDoModal onSubmit={handleSubmit}>
          {item === undefined ? (
            <h2>Создание задачи</h2>
          ) : (
            <h2>Редактирование задачи</h2>
          )}
          <StyledInputWrapper>
            <input
              type="text"
              placeholder="Введите название задачи"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
              minLength={3}
              autoFocus
            />
          </StyledInputWrapper>
          <div className="buttons-wrapper">
            <UiButton type="submit">Сохранить</UiButton>
            <UiButton variant="outlined" onClick={() => setIsOpen(false)}>
              Отмена
            </UiButton>
          </div>
        </StyledCreateToDoModal>
      </>
    </UiModal>
  );
};

export { ToDoModal };
