import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: #e66e62;
  width: 370px;
  display: flex;
  flex-direction: column;
  padding: 100px 10px 0 0;
  position: relative;
  transition: 250ms;
  @media screen and (max-width: 1000px) {
    width: 80%;
    position: fixed;
    height: 100%;
    min-width: 284px;
  }
`;

// atoms

export const Logo = styled.div`
  font-size: 5rem;
  color: white;
  text-align: right;
  font-weight: 900;

  flex-grow: 2;
  transition: 250ms;
  @media screen and (max-width: 1000px) {
    font-size: 3rem;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: right;
  flex-grow: 6;
`;

export const NavigationListItem = styled.li`
  font-size: 3rem;
  color: white;
  transition: 250ms;
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const Footer = styled.footer`
  flex-grow: 1;
  font-size: 1rem;
  color: white;
  text-align: center;
  @media screen and (max-width: 1000px) {
    text-align: right;
  }
`;
