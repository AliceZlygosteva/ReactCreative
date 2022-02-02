import { IAddTodo } from "../../types";

export interface IPopUp {
  addItem: (todoData: IAddTodo) => void;
  className?: string;
  handleClose: () => void;
  isShow: boolean;
}