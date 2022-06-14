import React from "react";
import LoginForm from "@molecules/LoginForm/LoginForm";
import Title from "@atoms/Title";

function LoginContainer() {
  return (
    <div>
      <Title content="로그인" importance="h2"/>
      <LoginForm/>
    </div>
  )
}

export default LoginContainer
