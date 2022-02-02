import { IItemTodo } from "../../types";

export interface IItemToDoProps {
  changeStatus: (id: string, isCompleted: boolean) => void;
  deleteItem: (id: string) => void;
  item: IItemTodo;
}
