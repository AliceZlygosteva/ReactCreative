import React from "react";

import { APP_THEMES } from "../constants";

const ThemeContext = React.createContext({
  theme: APP_THEMES.dark,
  handleSetTheme: () => {},
});

export default ThemeContext;