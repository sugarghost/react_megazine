import React from "react";
import RegisterForm from "@molecules/RegisterForm/RegisterForm";
import Title from "@atoms/Title";

function RegisterContainer() {
  return (
    <div>
      <Title content="회원가입" importance="h2"/>
      <RegisterForm/>
    </div>
  )
}

export default RegisterContainer
