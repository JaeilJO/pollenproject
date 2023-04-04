import styled from "styled-components";

export const HamburgerButton = styled.div`
  border: none;
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 320ms;
  cursor: pointer;
  @media screen and (min-width: 500px) {
    opacity: 0;
    pointer-events: none;
  }
`;
export const HamburgerBar = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.hamburgetState ? `transparent` : `#e66e62`};
  transform: ${(props) => (props.hamburgetState ? `translateX(-30px)` : ``)};
  transition: 320ms;
  :after,
  :before {
    content: " ";
    position: absolute;
    width: 30px;
    height: 4px;
    border-radius: 2px;
    background-color: #e66e62;
    transition: 320ms;
  }

  &:after {
    transform: ${(props) =>
      props.hamburgetState
        ? `translate(30px,0px) rotate(45deg)`
        : `translate(0px,-10px)`};
  }

  &:before {
    transform: ${(props) =>
      props.hamburgetState
        ? `translate(30px,0px) rotate(-45deg)`
        : `translate(0px,10px)`};
  }
`;
