/* eslint-disable react/no-unused-prop-types */
import React,{ReactElement} from "react";
import { Navigate, Outlet} from "react-router-dom";
import {isExist} from "@utils/Jwt/jwt"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface PrivateRouteProps {
  children ?: ReactElement; // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
  authentication : boolean; // true :인증을 반드시 해야하만 접속가능, false : 인증을 반디스 안해야만 접속 가능
}

// 타입 스크립트 첫 글자가 대문자여야지 인식을 함
export default function PrivateRoutes({authentication}:PrivateRouteProps):React.ReactElement|null {

  const localToken = localStorage.getItem('recoil-persist' || '{}');
  const token = localToken ? JSON.parse(localToken).userToken : "";
  const ReactSwal = withReactContent(Swal)
  const isAuthenticated = isExist(token);
  console.log("router has called", token , isAuthenticated);

  if (authentication) {
    // 인증이 반드시 필요한 페이지
    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    return (isAuthenticated === null || isAuthenticated === false) ? <Navigate to="/login"/> : <Outlet/>;
  }
  // 인증이 반드시 필요없는 페이지

  // 인증이 필요없는 페이지에서 안되있는 경우 페이지로 이동
  if(isAuthenticated === null || isAuthenticated === false){
    return <Outlet/>
  }
  // 인증이 필요없는 페이지에서 인증이 되어있는 경우 메인 페이지로
  
  // 사용자에게 3초간 유지되는 알림창을 표시
  // 화면 이동은 미리 진행됨
  ReactSwal.fire({
    title: <p>이미 로그인 되어 있습니다!</p>,
    html: <p>메인으로 이동합니다!</p>,
    icon: 'info',
    timer: 3000
  });
  
  // 문제가 생겨서 처리가 안된 경우 main으로 이동
  return <Navigate to='/'/>
};