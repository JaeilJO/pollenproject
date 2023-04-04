import React, { useCallback, useState } from "react";
import { HeaderBox, NavigationList, NavigationItem } from "./Header.styled";
import Logo from "../../atoms/Logo/Logo";
import Hamburger from "../../atoms/Hamburger/Hamburger";

const Header = () => {
  const navigationItems = ["Detail", "Main", "Contact"];
  const [hamburgerControl, setHamburgerControl] = useState(false);
  const onClickHamburger = useCallback(() => {
    setHamburgerControl(!hamburgerControl);
  }, [hamburgerControl]);
  return (
    <HeaderBox>
      <Logo />

      <NavigationList hamburgerState={hamburgerControl}>
        <NavigationItem>Detail</NavigationItem>
        <NavigationItem>Main</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
      </NavigationList>

      <Hamburger
        onClickHamburger={onClickHamburger}
        hamburgerState={hamburgerControl}
      />
    </HeaderBox>
  );
};

export default Header;
