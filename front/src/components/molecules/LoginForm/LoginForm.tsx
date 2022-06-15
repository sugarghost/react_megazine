import React from "react";
import Input from "@atoms/Input";
import styled from "styled-components";
import Button from "@atoms/Buttons";
import { FieldValues, useForm } from 'react-hook-form';
import {useMutation} from "react-query";
import { useNavigate } from 'react-router-dom';
import userApi from '../../../service/useUserApi';

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


  const mutation = useMutation((addData: FieldValues) => userApi.callLoginUser(addData), {
    onSuccess: () => {
      navigate('/');
    },
  });
  const onSubmit = (data: FieldValues) => {
    mutation.mutate(data);
  };


  return(
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <Input id="userId" register = {register('userId', {required:true})}>ddd</Input>
    <Input id="password" register = {register('password', {required:true})}>ddd</Input>
    <Button type="submit" size="big">으앙</Button>
    </StyledForm>
  )
}
export default LoginForm
