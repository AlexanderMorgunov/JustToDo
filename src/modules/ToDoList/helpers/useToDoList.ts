import { useMemo, useState } from "react";
import { IToDoListItem } from "../../../shared/types/IToDoListItem";
import { initialTodos } from "../utils/initialTodos";

export const useToDoList = () => {
  const [todosState, setTodosState] = useState<IToDoListItem[]>(initialTodos);
  const [filter, setFilter] = useState<string>("all");

  const [createToDoModalIsOpen, setCreateToDoModalIsOpen] = useState(false);

  const onCreateToDo = (title: string) => {
    setTodosState([
      ...todosState,
      { id: todosState.length + 1, title, isDone: false },
    ]);
  };

  const filteredTodos = useMemo(
    () =>
      todosState.filter((todo) => {
        switch (filter) {
          case "active":
            return !todo.isDone;
          case "completed":
            return todo.isDone;
          default:
            return todo;
        }
      }),
    [todosState, filter]
  );

  return {
    todosState,
    setTodosState,
    filter,
    setFilter,
    createToDoModalIsOpen,
    setCreateToDoModalIsOpen,
    onCreateToDo,
    filteredTodos,
  };
};
