import React from "react";
import Input from "@atoms/Input";
import styled from "styled-components";
import Button from "@atoms/Buttons";
import { FieldValues, useForm } from 'react-hook-form';
import {useMutation} from "react-query";
import {useSetRecoilState} from 'recoil'
import { useNavigate } from 'react-router-dom';
import userToken from "@recoil/userAtoms"
import userApi from "@service/useUserApi";

const StyledForm = styled.form`
  margin:0 auto;
`

export type RegistrationFormFields = {
  userId: string;
  password: string;
};

function LoginForm(){
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm<RegistrationFormFields>();


  const setUserToken = useSetRecoilState(userToken)
  const mutation = useMutation((addData: FieldValues) => userApi.callLoginUser(addData), {
    onSuccess: (res: FieldValues) => {
      localStorage.setItem("userToken",res.data.userToken)
      setUserToken(true)
      navigate('/');
    },
  });
  const onSubmit = (data: FieldValues) => {
    mutation.mutate(data);
  };


  return(
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <Input id="userId" register = {register('userId', {required:true})}>아이디</Input>
    <Input id="password" register = {register('password', {required:true})}>패스워드</Input>
    <Button type="submit" size="big">으앙</Button>
    </StyledForm>
  )
}
export default LoginForm
