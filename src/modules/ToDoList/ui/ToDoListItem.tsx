import { FC } from "react";
import styled from "styled-components";
import { UiButton } from "../../../shared/ui/UiButton";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IToDoListItem } from "../../../shared/types/IToDoListItem";
import { DeleteToDoModal } from "./DeleteToDoModal";
import { ToDoModal } from "./ToDoModal";
import { useToDoListItem } from "../helpers/useToDoListItem";

interface Props {
  item: IToDoListItem;
  setTodosState: React.Dispatch<React.SetStateAction<IToDoListItem[]>>;
}

const StyledToDoListItem = styled.div<{ $isDone: boolean }>`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr 0.5fr 0.5fr;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  text-decoration: ${(props) => (props.$isDone ? "line-through" : "none")};
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .todo-title {
    text-decoration: ${(props) => (props.$isDone ? "line-through" : "none")};
    color: ${(props) => (props.$isDone ? "green" : "#2d2d2d")};
    text-align: center;
  }
`;

const ToDoListItem: FC<Props> = ({
  item: { title, isDone, id },
  setTodosState,
}) => {
  const {
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    handleSwitchCheckBox,
    handleDelete,
    handleEdit,
  } = useToDoListItem({ setTodosState, id });

  return (
    <>
      <StyledToDoListItem $isDone={isDone}>
        <>
          <input
            type="checkbox"
            checked={isDone}
            onChange={handleSwitchCheckBox}
          />
          <div className="todo-title">{title}</div>
          <UiButton size="small" onClick={() => setIsEditModalOpen(true)}>
            <FaEdit fontSize={15} />
          </UiButton>
          <UiButton
            variant="warning"
            color="white"
            size="small"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <RiDeleteBinLine fontSize={15} />
          </UiButton>
        </>
      </StyledToDoListItem>
      {isDeleteModalOpen && (
        <DeleteToDoModal
          title={title}
          setIsOpen={setIsDeleteModalOpen}
          onDeleteToDo={handleDelete}
        />
      )}
      {isEditModalOpen && (
        <ToDoModal
          setIsOpen={setIsEditModalOpen}
          item={{ title, isDone, id }}
          onCreateToDo={handleEdit}
        />
      )}
    </>
  );
};

export { ToDoListItem };
