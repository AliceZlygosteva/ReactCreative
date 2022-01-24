import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import {
  BUTTON_TYPES,
  BUTTON_SIZES,
  BUTTON_COLOR,
  BUTTON_THEMES,
} from "./store";

import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  color,
  onClick,
  size = "m",
  buttonType = "default",
  type = "button",
  fullWidth,
  theme,
}) => {
  const classNames = cn(styles.button, className, {
    [styles[`button--color-${color}`]]: BUTTON_COLOR.includes(color),
    [styles[`button--button-type-${buttonType}`]]:
      BUTTON_TYPES.includes(buttonType),
    [styles[`button--size-${size}`]]: BUTTON_SIZES.includes(size),
    [styles[`button--full-width`]]: fullWidth,
    [styles[`button-theme-${theme}`]]: BUTTON_THEMES.includes(theme),
  });

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(BUTTON_TYPES),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(BUTTON_COLOR),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(BUTTON_SIZES),
  theme: PropTypes.oneOf(BUTTON_THEMES),
  type: PropTypes.string,
};

export default Button;