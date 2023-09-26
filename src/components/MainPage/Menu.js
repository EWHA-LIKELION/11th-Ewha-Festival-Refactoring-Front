import React from "react";
import styled from "styled-components";

import flower from "../assets/images/Main/flower.svg";
import close from "../assets/images/Main/close.svg";
import mypageWhite from "../assets/images/Main/mypage-white.svg";
import home from "../assets/images/Main/home.svg";
import megaphone from "../assets/images/Main/megaphone.svg";
import booth from "../assets/images/Main/booth.svg";
import perform from "../assets/images/Main/perform.svg";
import trashcan from "../assets/images/Main/trashcan.svg";
import creator from "../assets/images/Main/creator.svg";

const Menu = () => {
  return (
    <Wrapper>
      <img src={close} />
      <img src={flower} />
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  background-color: var(--beige);
`;
