import { IItemTodo, TFilterTypesValues } from "../../types";

export interface IToDOListProps {
  changeStatus: (id: string, isCompleted: boolean) => void;
  deleteItem: (id: string) => void;
  filter: TFilterTypesValues;
  list: IItemTodo[];
}