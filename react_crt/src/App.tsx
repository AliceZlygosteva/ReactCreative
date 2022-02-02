import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

import { ThemeContext } from "./context";
import { APP_THEMES } from "./constants";
import { TThemeKeys, TThemeValues } from "./types";

import "./App.scss";

function App() {
  const [theme, setTheme] = useState<TThemeValues>(APP_THEMES.dark);

  const handleSetTheme = () => {
    const newTheme = (theme: TThemeKeys) =>
      theme === APP_THEMES.dark ? APP_THEMES.light : APP_THEMES.dark;

    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
}

export default App;
