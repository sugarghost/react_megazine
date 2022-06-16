import React from "react";
import NavButton from "@atoms/NavButton";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  display:flex;
  height:100%;
  align-items: center;
  justify-content: center;
  a:nth-child(2) {
    font-size:22px;
  }
`

function Navi() {
  return (
    <NavContainer>

      <NavButton linkUrl="/write">
        <FontAwesomeIcon icon="pen"/>
      </NavButton>
      <NavButton linkUrl="/">
        <FontAwesomeIcon icon="bars"/>
      </NavButton>
      {/*
      마이페이지 용 네비게이션이나 일단 login으로..
      */}
      <NavButton linkUrl="/login">
        <FontAwesomeIcon icon="user"/>
      </NavButton>
    </NavContainer>
  )
}

export default Navi
