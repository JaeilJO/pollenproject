import React, { useEffect } from "react";

import Main from "../../organisms/Main/Main";
import { MainContainer } from "./MainTemplate.styled";
import Header from "../../organisms/Header/Header";
import axios from "axios";

const MainTemplate = () => {
  // const getPollen = async () => {
  //   const API_KEY = process.env.NEXT_PUBLIC_TOMORROWIO_API_KEY;
  //   const time_steps = "current";
  //   const response = await axios
  //     .get(
  //       `https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=treeIndex&timesteps=${time_steps}&units=metric&apikey=${API_KEY}`
  //     )
  //     .then((result) => result.data)
  //     .catch((error) => console.error(error));
  //   return response;
  // };
  // console.log(getPollen());

  return (
    <MainContainer>
      <Header />
      <Main />
    </MainContainer>
  );
};

export default MainTemplate;
