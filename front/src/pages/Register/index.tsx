import React from "react";
import RegisteContainer from "@organisms/RegisteContainer";

function Register(){
  const isLogin = !!localStorage.getItem("userToken");
  if (isLogin) {
    alert('이미 로그인이 되어있습니다.');
    window.history.back();
  }
  return(
      <RegisteContainer/>
  )
}

export default Register
