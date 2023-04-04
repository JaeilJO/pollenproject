import React from "react";

import Main from "../../organisms/Main/Main";
import { MainContainer } from "./MainTemplate.styled";
import Header from "../../organisms/Header/Header";

const MainTemplate = () => {
  return (
    <MainContainer>
      <Header />
      <Main />
    </MainContainer>
  );
};

export default MainTemplate;
