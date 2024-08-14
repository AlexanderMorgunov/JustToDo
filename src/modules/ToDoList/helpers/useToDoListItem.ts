import { useState } from "react";
import { IToDoListItem } from "../../../shared/types/IToDoListItem";

interface Props {
  setTodosState: React.Dispatch<React.SetStateAction<IToDoListItem[]>>;
  id: number;
}

export const useToDoListItem = ({ setTodosState, id }: Props) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSwitchCheckBox = () => {
    setTodosState((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    });
  };

  const handleDelete = () => {
    setTodosState((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleEdit = (title: string) => {
    setTodosState((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, title };
        }
        return item;
      });
    });
    setIsEditModalOpen(false);
  };

  return {
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    handleSwitchCheckBox,
    handleDelete,
    handleEdit,
  };
};
