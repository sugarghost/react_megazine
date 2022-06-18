import React from "react";
import NavButton from "@atoms/NavButton";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRecoilValue, useResetRecoilState} from "recoil";
import userToken from "@recoil/userAtoms";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const NavContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  a:nth-child(2) {
    font-size: 22px;
    margin-bottom: 2px;
  }
  a:nth-child(3).active{ //로그인,로그아웃 버튼 색 고정
    color:rgb(85, 85, 85) !important;
  }
`

function Navi() {
  const navigate = useNavigate();
  const token = useRecoilValue(userToken)
  const ReactSwal = withReactContent(Swal)
  const resetRecoilState = useResetRecoilState(userToken);

  const logout = async () => {
    resetRecoilState()

    ReactSwal.fire({
      title: <p>로그아웃 완료!</p>,
      html: <p>로그인 페이지로 이동합니다.</p>,
      icon: 'info',
      timer: 3000
    }).then(() => {
      navigate('/login');
    });
  };
  return (
    <NavContainer>
      <NavButton linkUrl="/write">
        <FontAwesomeIcon icon="pen"/>
      </NavButton>
      <NavButton linkUrl="/">
        <FontAwesomeIcon icon="bars"/>
      </NavButton>
      {/*
      마이페이지 용 네비게이션이나 일단 login으로..
      <NavButton linkUrl="/myPage">
        <FontAwesomeIcon icon="user"/>
      </NavButton>
      */}
      {!token ?
        <>
        <NavButton linkUrl="/login">
          <FontAwesomeIcon icon="right-to-bracket"/>
        </NavButton>

        <NavButton linkUrl="/register">
          <FontAwesomeIcon icon="user-plus"/>
        </NavButton>
        </>
        :
        <NavButton linkUrl="" onClick={logout}>
          <FontAwesomeIcon icon="right-from-bracket"/>
        </NavButton>
      }
    </NavContainer>
  )
}

export default Navi
