import React from "react";
import cn from "classnames";

import { BUTTON_THEMES, BUTTON_SIZES, BUTTON_COLOR } from "./store";
import styles from "./Button.module.scss";

class Button extends React.Component {
  render() {
    const {
      children,
      className,
      color,
      onClick,
      size="m",
      theme="default",
      type="button",
      fullWidth,
    } = this.props;

    const classNames = cn(styles.button, className, {
      [styles[`button--color-${color}`]]: BUTTON_COLOR.includes(color),
      [styles[`button--theme-${theme}`]]: BUTTON_THEMES.includes(theme),
      [styles[`button--size-${size}`]]: BUTTON_SIZES.includes(size),
      [styles[`button--full-width`]]: fullWidth,
    })

    return (
      <button
        className={classNames}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
};

export default Button;