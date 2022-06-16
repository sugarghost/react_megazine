import React from "react";
import styled from "styled-components";
import LoginContainer from "@organisms/LoginContainer";
import Title from "@atoms/Title";

const StyledLoginTemplate = styled.div`
  max-width:400px;
  margin:0 auto;
`
function LoginTemplate(){
  return(
    <StyledLoginTemplate>
      <Title content="로그인" importance="h2"/>
      <LoginContainer/>
    </StyledLoginTemplate>
  )
}
export default LoginTemplate
