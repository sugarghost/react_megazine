import React from "react";
import styled from "styled-components";
import RegisterContainer from "@organisms/RegisterContainer";
import Title from "@atoms/Title";

const StyledRegisterTemplate = styled.div`
  max-width:400px;
  margin:0 auto;
`
function RegisterTemplate(){
  return(
    <StyledRegisterTemplate>
      <Title content="로그인" importance="h2"/>
      <RegisterContainer/>
    </StyledRegisterTemplate>
  )
}
export default RegisterTemplate
