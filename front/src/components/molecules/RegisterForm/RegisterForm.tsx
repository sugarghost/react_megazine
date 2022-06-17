import React, {useCallback, useContext, useState} from "react";
import Input from "@atoms/Input";
import Textarea from "@atoms/Textarea";
import styled, {ThemeContext} from "styled-components";
import Button from "@atoms/Buttons";
import {FieldValues, useForm} from 'react-hook-form';
import {useMutation} from "react-query";
import {useNavigate} from 'react-router-dom';
import userApi from "@service/useUserApi";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & > label {
    margin: 5px 5px;
    flex-direct: column;
  }

  & > input , 
  & > label > textarea {
    margin-top: 5px;
    width: 100%;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 2px;
    box-shadow: 1px 1px 5px rgba(66, 66, 66, .75);
  }
  & > label > textarea{
    
    height: 100px;
  }
  & > input:focus , 
  & > label > textarea{
    outline: none;
  }

  & > span {
    margin: 5px 5px;
  }
  & > .success {
    color: green;
  }

  & > .fail {
    color: red;
  }
`

export type RegistrationFormFields = {
  email: string;
  name: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  introduce: string;
};

function RegisterForm() {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm<RegistrationFormFields>();
  const ReactSwal = withReactContent(Swal)

  const themeContext = useContext(ThemeContext);

  const [, setName] = useState<string>('');
  const [, setNickname] = useState<string>('');
  const [, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setPasswordConfirm] = useState<string>('');

  const [nameMessage, setNameMessage] = useState<string>('');
  const [nicknameMessage, setNicknameMessage] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('');

  const [isName, setIsName] = useState<boolean>(false);
  const [isNickname, setIsNickname] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);


  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
      setIsName(false);
    } else {
      setNameMessage('올바른 이름 형식입니다');
      setIsName(true);
    }
  }, []);

  const onChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNicknameMessage('2글자 이상 10글자 미만으로 입력해주세요.');
      setIsNickname(false);
    } else {
      setNicknameMessage('올바른 닉네임 형식이에요');
      setIsNickname(true);
    }
  }, []);
  // 이메일
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식이에요');
      setIsEmail(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호에요');
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요');
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요');
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );


  const mutation = useMutation((addData: FieldValues) => userApi.callRegistUser(addData), {
    onSuccess: async () => {

      ReactSwal.fire({
        title: <p>회원가입 성공!</p>,
        html: <p>로그인 페이지로 이동합니다.</p>,
        icon: 'info',
        timer: 3000
      }).then(() => {
        navigate('/login');
      });
    },
    onError: async (res: FieldValues) => {

      ReactSwal.fire({
        title: <p>회원가입 실패!</p>,
        html: <p>{res.response.data.message}</p>,
        icon: 'error'
      });
    }
  });
  const onSubmit = (data: FieldValues) => {
    if (isName && isNickname && isEmail && isPassword && isPasswordConfirm)
      mutation.mutate(data)
    else{
      ReactSwal.fire({
        title: <p>회원가입 실패!</p>,
        html: <p>입력값을 확인해 주세요</p>,
        icon: 'error'
      });
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input id="email" type="email" onChange={onChangeEmail}
             register={register('email', {required: true})}>아이디</Input>
      <span className={isEmail ? ('success'):('fail')}>{emailMessage}</span>
      <Input id="name" onChange={onChangeName}
             register={register('name', {required: true})}>이름</Input>
      <span className={isName ? ('success'):('fail')}>{nameMessage}</span>
      <Input id="nickname" onChange={onChangeNickname}
             register={register('nickname', {required: true})}>닉네임</Input>
      <span className={isNickname ? ('success'):('fail')}>{nicknameMessage}</span>
      <Input id="password" type="password" onChange={onChangePassword}
             register={register('password', {required: true})}>패스워드</Input>
      <span className={isPassword ? ('success'):('fail')}>{passwordMessage}</span>
      <Input id="passwordCheck" type="password" onChange={onChangePasswordConfirm}
             register={register('passwordCheck', {required: true})}>패스워드체크</Input>
      <span className={isPasswordConfirm ? ('success'):('fail')}>{passwordConfirmMessage}</span>
      <Textarea id="introduce" register={register('introduce')}>자기소개</Textarea>

      {isEmail && isName && isNickname && isPassword && isPasswordConfirm ? (
        <Button type="submit" size="big" bgColor={themeContext.colors.point_3}
                round="10px">회원가입</Button>
      ) : (
        <Button type="submit" size="big" bgColor="#ccc"
                round="10px" disabled="disabled">회원가입</Button>
      )}
    </StyledForm>
  )
}

export default RegisterForm
