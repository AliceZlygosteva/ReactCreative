import { APP_THEMES, TASKS_PRIORITY, FILTER_TYPES } from "../constants";

export type TThemeKeys = keyof typeof APP_THEMES;
export type TThemeValues = typeof APP_THEMES[TThemeKeys];

export type TFilterTypesKeys = keyof typeof FILTER_TYPES;
export type TFilterTypesValues = typeof FILTER_TYPES[TFilterTypesKeys];

export type TPriority = keyof typeof TASKS_PRIORITY;

export interface IItemTodo {
  id: string;
  isCompleted: boolean;
  description: string;
  priority: TPriority;
};

export interface IAddTodo {
  id: string;
  description: string;
  priority: TPriority;
};