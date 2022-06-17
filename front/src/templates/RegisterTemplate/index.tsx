import React from "react";
import styled from "styled-components";
import RegisterContainer from "@organisms/RegisterContainer";
import Title from "@atoms/Title";

const StyledRegisterTemplate = styled.div`
  @media (min-width: 1000px) {
    max-width:400px;
  }
  width: 90vw;
  margin:0 auto;
  background: #fff;
  padding:10px;
  box-sizing: border-box;
  box-shadow: 0 0 12px rgba(0,0,0,0.05);
  border-radius: 10px;
`
function RegisterTemplate(){
  return(
    <StyledRegisterTemplate>
      <Title content="회원가입" importance="h2"/>
      <RegisterContainer/>
    </StyledRegisterTemplate>
  )
}
export default RegisterTemplate
