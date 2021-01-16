import React from "react";
import { Main } from "./styles";
import GlobalStyles from "./globalStyles";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Routes/>
      </Main>
    </>
  );
}

export default App;
