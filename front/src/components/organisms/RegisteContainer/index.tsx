import React from "react";
import RegisteForm from "@molecules/RegisteForm/RegisteForm";
import Title from "@atoms/Title";

function RegisteContainer() {
  return (
    <div>
      <Title content="회원가입" importance="h2"/>
      <RegisteForm/>
    </div>
  )
}

export default RegisteContainer
