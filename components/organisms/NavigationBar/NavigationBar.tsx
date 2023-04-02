import React from "react";
import {
  Controller,
  Footer,
  Logo,
  Navigation,
  NavigationList,
  NavigationListItem,
} from "./NavigationBar.styled";

const NavigationBar = () => {
  return (
    <>
      <Navigation>
        <Logo>ConCon</Logo>
        <NavigationList>
          <NavigationListItem>Detail Map</NavigationListItem>
          <NavigationListItem>Contact us</NavigationListItem>
        </NavigationList>
        <Footer>Made from JEV Company</Footer>
        <Controller>Hello</Controller>
      </Navigation>
    </>
  );
};

export default NavigationBar;
