import React from "react";
import RegisteContainer from "@organisms/RegisterContainer";

function Register(){
  const isLogin = !!sessionStorage.getItem("userToken");
  if (isLogin) {
    alert('이미 로그인이 되어있습니다.');
    window.history.back();
  }
  return(
      <RegisteContainer/>
  )
}

export default Register
