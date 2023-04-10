import styled from "styled-components";

export const HeaderBox = styled.header`
  height: 50px;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 20px;
  position: absolute;
  right: ${(props) => (props.hamburgerState ? `80px` : `40px`)};
  transition: 230ms;
  opacity: ${(props) => (props.hamburgerState ? `100` : `0`)};
  pointer-events: ${(props) => (props.hamburgerState ? `` : `none`)};
  cursor: pointer;

  @media screen and (min-width: 500px) {
    position: relative;
    opacity: 100;
    right: 0;
    gap: 0;
    display: flex;
    pointer-events: all;
  }
`;

export const NavigationItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  transition: 320ms;
  @media screen and (min-width: 500px) {
    width: 100px;
    text-align: center;
    line-height: 50px;
  }
`;
