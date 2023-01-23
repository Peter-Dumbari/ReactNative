import React from "react";
import GlobalProvider from "./src/context/Provider";
import AppNavContainer from "./src/navigations";

const TextInputExample = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};
export default TextInputExample;
