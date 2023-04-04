import React from "react";

import { HamburgerBar, HamburgerButton } from "./Hamburger.styled";

const Hamburger = ({ hamburgerState, onClickHamburger }) => {
  return (
    <HamburgerButton onClick={onClickHamburger}>
      <HamburgerBar hamburgetState={hamburgerState} />
    </HamburgerButton>
  );
};

export default Hamburger;
