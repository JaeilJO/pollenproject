import React from "react";
import {
  Footer,
  Logo,
  Navigation,
  NavigationList,
  NavigationListItem,
} from "./NavigationBar.styled";

const NavigationBar = () => {
  return (
    <Navigation>
      <Logo>ConCon</Logo>
      <NavigationList>
        <NavigationListItem>Detail Map</NavigationListItem>
        <NavigationListItem>Contact us</NavigationListItem>
      </NavigationList>
      <Footer>Made from JEV Company</Footer>
    </Navigation>
  );
};

export default NavigationBar;
