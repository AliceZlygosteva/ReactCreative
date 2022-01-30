import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import Button from "../UI/Button";

import { ThemeContext } from "../../context/index";

import styles from "./Header.module.scss";

class Header extends React.Component {
  render() {
    const { theme, handleSetTheme } = this.context;

    return (
      <div
        className={cn(styles.header, {
          [styles[`header--${theme}`]]: theme,
        })}
      >
        <Link to="/" className={styles.headerWrapper}>
          <h2 className={styles.headerTitle}>My React App</h2>
        </Link>
        <Button
          buttonType="switch"
          size="s"
          color="grey"
          onClick={() => handleSetTheme()}
        >
          Change Theme
        </Button>
      </div>
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
