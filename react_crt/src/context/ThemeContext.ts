import React from "react";

import { APP_THEMES } from "../constants";
import { TThemeValues } from "../types";

interface IThemeContext {
  theme: TThemeValues;
  handleSetTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: APP_THEMES.dark,
  handleSetTheme: () => {},
});

export default ThemeContext;