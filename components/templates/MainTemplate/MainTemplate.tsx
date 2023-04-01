import React from "react";
import NavigationBar from "../../organisms/NavigationBar/NavigationBar";
import Main from "../../organisms/Main/Main";
import { MainContainer } from "./MainTemplate.styled";

const MainTemplate = () => {
  return (
    <MainContainer>
      <NavigationBar />
      <Main />
    </MainContainer>
  );
};

export default MainTemplate;
