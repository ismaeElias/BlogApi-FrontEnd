import React, { useState, useCallback, useContext } from "react";
import { ThemeProvider } from "styled-components";

export const themes = {
  displayOn: {
    display: "block",
  },
  displayOff: {
    display: "none",
  },
};

export const DisableComponentContext = React.createContext();

export const DisableComponentProvider = (props) => {
  const [disable, setDisable] = useState(false);

  return (
    <DisableComponentContext.Provider value={{ disable, setDisable }}>
      {props.children}
    </DisableComponentContext.Provider>
  );
};

export const StyleContext = React.createContext();

export const useStyle = () => useContext(StyleContext);

export const StyleProvider = (props) => {
  const [theme, setStyle] = useState(themes.displayOff);

  const styleTheme = useCallback(() => {
    if (theme === themes.displayOn) {
      setStyle(themes.displayOff);
    } else if (theme === themes.displayOff) {
      setStyle(themes.displayOn);
    }
  }, [theme]);

  return (
    <StyleContext.Provider value={{ theme, styleTheme, setStyle }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyleContext.Provider>
  );
};
