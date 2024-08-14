import { useMemo } from "react";
import { ToDoListWrapper } from "./ToDoListWrapper";
import { UiButton } from "../../../shared/ui/UiButton";
import styled from "styled-components";
import { ToDoModal } from "./ToDoModal";
import { useToDoList } from "../helpers/useToDoList";
import { ToDoListItem } from "./ToDoListItem";

const StyledFiltersGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledTitle = styled.div`
  font-size: 70px;
  color: #fff;
  font-weight: 700;
  span {
    color: #0f64a3;
  }
`;

const ToDoList = () => {
  const {
    todosState,
    setTodosState,
    filter,
    setFilter,
    createToDoModalIsOpen,
    setCreateToDoModalIsOpen,
    onCreateToDo,
    filteredTodos,
  } = useToDoList();

  const todoListContent = useMemo(
    () =>
      filteredTodos.length ? (
        filteredTodos.map((todo) => {
          return (
            <ToDoListItem
              key={todo.id}
              item={todo}
              setTodosState={setTodosState}
            />
          );
        })
      ) : (
        <StyledTitle>Список задач пуст</StyledTitle>
      ),
    [filteredTodos, todosState]
  );

  return (
    <>
      <StyledTitle>
        JUST
        <span>toDo</span>
      </StyledTitle>
      <StyledFiltersGroup>
        <UiButton
          onClick={() => setFilter("all")}
          variant={filter === "all" ? "outlined" : "contained"}
          color="white"
        >
          Все
        </UiButton>
        <UiButton
          onClick={() => setFilter("active")}
          variant={filter === "active" ? "outlined" : "contained"}
          color="white"
        >
          Активные
        </UiButton>
        <UiButton
          onClick={() => setFilter("completed")}
          variant={filter === "completed" ? "outlined" : "contained"}
          color="white"
        >
          Завершенные
        </UiButton>
      </StyledFiltersGroup>
      <ToDoListWrapper>
        <>
          {todoListContent}
          {createToDoModalIsOpen && (
            <ToDoModal
              setIsOpen={setCreateToDoModalIsOpen}
              onCreateToDo={onCreateToDo}
            />
          )}
        </>
      </ToDoListWrapper>
      <UiButton onClick={() => setCreateToDoModalIsOpen(true)}>
        Добавить задачу
      </UiButton>
    </>
  );
};

export { ToDoList };
