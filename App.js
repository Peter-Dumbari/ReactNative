import React from "react";
import GlobalProvider from "./src/context/Provider";
import AppNavContainer from "./src/navigations";
import { StatusBar } from "expo-status-bar";

const TextInputExample = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
      <StatusBar style="light" />
    </GlobalProvider>
  );
};
export default TextInputExample;
