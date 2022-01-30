import React from "react";
import cn from "classnames";

import {
  BUTTON_TYPES,
  BUTTON_SIZES,
  BUTTON_COLOR,
  BUTTON_THEMES,
} from "./store";
import { IButtonProps } from "./types";

import styles from "./Button.module.scss";

const Button = ({
  buttonType = "default",
  children,
  className,
  color,
  fullWidth,
  onClick,
  size = "m",
  theme,
  type = "button",
}: IButtonProps) => {
  const classNames = cn(styles.button, className, {
    [styles[`button--color-${color}`]]: color && BUTTON_COLOR.includes(color),
    [styles[`button--button-type-${buttonType}`]]:
      BUTTON_TYPES.includes(buttonType),
    [styles[`button--size-${size}`]]: BUTTON_SIZES.includes(size),
    [styles[`button--full-width`]]: fullWidth,
    [styles[`button-theme-${theme}`]]: theme && BUTTON_THEMES.includes(theme),
  });

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
