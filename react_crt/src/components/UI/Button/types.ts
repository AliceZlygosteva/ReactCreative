import { ReactNode } from "react";
import {
  BUTTON_COLOR,
  BUTTON_SIZES,
  BUTTON_THEMES,
  BUTTON_TYPES,
} from "./store";

type TButtonColor = typeof BUTTON_COLOR[number];
type TButtonSizes = typeof BUTTON_SIZES[number];
type TButtonThemes = typeof BUTTON_THEMES[number];
type TButtonTypes = typeof BUTTON_TYPES[number];

export interface IButtonProps {
  buttonType?: TButtonTypes;
  children?: ReactNode;
  className?: string;
  color?: TButtonColor;
  fullWidth?: boolean;
  onClick?: () => void;
  size?: TButtonSizes;
  theme?: TButtonThemes;
  type?: 'button' | 'submit' | 'reset';
}