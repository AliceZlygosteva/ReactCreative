import React from "react";

import { APP_THEMES } from "../constants";
import { IThemeContext } from "../types";

const ThemeContext = React.createContext<IThemeContext>({
  theme: APP_THEMES.dark,
  handleSetTheme: () => {},
});

export default ThemeContext;