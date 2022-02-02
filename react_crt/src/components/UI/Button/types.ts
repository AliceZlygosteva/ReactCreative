import { ReactNode } from "react";
import {
  BUTTON_COLOR,
  BUTTON_SIZES,
  BUTTON_THEMES,
  BUTTON_TYPES,
} from "./store";

type TButtonColor = typeof BUTTON_COLOR[number];

type TButtonSizesKeys = keyof typeof BUTTON_SIZES;
type TButtonSizesValues = typeof BUTTON_SIZES[TButtonSizesKeys];

type TButtonThemes = typeof BUTTON_THEMES[number];
type TButtonTypes = typeof BUTTON_TYPES[number];

export interface IButtonProps {
  buttonType?: TButtonTypes;
  children?: ReactNode;
  className?: string;
  color?: TButtonColor;
  fullWidth?: boolean;
  onClick?: () => void;
  size?: TButtonSizesValues;
  theme?: TButtonThemes;
  type?: 'button' | 'submit' | 'reset';
}