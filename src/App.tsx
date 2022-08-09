import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  main: {
    red: "#FC4747",
    "pureWhite": "#FFFFFF",
    "darkBlue": "#10141E",
    "greyishBlue": "#5A698F",
    "semiDarkBlue": "#161d2f",
    "fontFamily": 'Outfit, sans-serif',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
