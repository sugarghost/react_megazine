import React from "react";
import Input from "@atoms/Input";
import styled from "styled-components";
import Button from "@atoms/Buttons";

const StyledForm = styled.form`
  margin:0 auto;
`
function LoginForm(){
  return(
    <StyledForm>
    <Input id="userId">ddd</Input>
    <Input id="userPassword">ddd</Input>
    <Button type="submit" size="big">으앙</Button>
    </StyledForm>
  )
}
export default LoginForm
