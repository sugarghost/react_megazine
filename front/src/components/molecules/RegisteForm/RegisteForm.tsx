import React, { useCallback, useState } from "react";
import Input from "@atoms/Input";
import styled from "styled-components";
import Button from "@atoms/Buttons";
import { FieldValues, useForm } from 'react-hook-form';
import {useMutation} from "react-query";
import { useNavigate } from 'react-router-dom';
import userApi from "@service/useUserApi";

const StyledForm = styled.form`
  margin:0 auto;
`

export type RegistrationFormFields = {
  userId: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

function RegisteForm(){
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm<RegistrationFormFields>();


  const [, setName] = useState<string>('');
  const [, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setPasswordConfirm] = useState<string>('');

  const [nameMessage, setNameMessage] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('');

  const [isName, setIsName] = useState<boolean>(false);
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
    onSuccess: () => {
      navigate('/');
    },
  });
  const onSubmit = (data: FieldValues) => {
   if (isName && isEmail && isPassword && isPasswordConfirm)
     mutation.mutate(data)
  else
    alert('입력값을 확인해 주세요');
  };
  return(
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input id="userId" onChange={onChangeEmail}
             register = {register('userId', {required:true})}>아이디</Input>
      <br/>
      <span>{emailMessage}</span>
      <br/>
      <Input id="nickname" onChange={onChangeName}
             register = {register('nickname', {required:true})}>닉네임</Input>
      <br/>
      <span>{nameMessage}</span>
      <br/>
      <Input id="password" onChange={onChangePassword}
             register = {register('password', {required:true})}>패스워드</Input>
      <br/>
      <span>{passwordMessage}</span>
      <br/>
      <Input id="passwordCheck" onChange={onChangePasswordConfirm}
             register = {register('passwordCheck', {required:true})}>패스워드체크</Input>
      <br/>
      <span>{passwordConfirmMessage}</span>
      <br/>

      <Button type="submit" size="big">으앙</Button>
    </StyledForm>
  )
}
export default RegisteForm
