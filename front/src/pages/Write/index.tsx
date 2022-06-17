import React, {useState} from "react";
import Button from "@atoms/Buttons";
import {useGetuserToken} from "@hooks/useLoginHooks";
import {Navigate, useNavigate} from "react-router-dom";
import AddImgInput from "@molecules/AddImgInput";
import {FieldValues, useForm} from "react-hook-form";
import Input from "@atoms/Input";
import usePostApi from "@service/usePostApi";
import styled from "styled-components";
import Title from "@atoms/Title";

const StyledFormContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
`
const StyledTemplateArea = styled.div`
`
export type WriteFormFileds = {
  title: string;
  content: string;
  image: File[];
  template: string;
};

function Write() {
  const {register, handleSubmit} = useForm<WriteFormFileds>();
  const [files, setFiles] = useState<File[]>([])
  const token = useGetuserToken()
  const postApi = usePostApi.post
  const navigate = useNavigate()
  if (!token) {
    alert('로그인이 필요한 페이지입니다.')
    return <Navigate to="/login" replace/>;
  }
  const saveBtnClick = (data: FieldValues) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('image', file);
    });
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('template', data.template)

    postApi(formData)
    navigate('/')
  }
  return (
    <>
      <Title content="글 작성하기" importance="h2"/>
      <StyledFormContainer>
        <form onSubmit={handleSubmit(saveBtnClick)} encType="multipart/formdata">
          <div>
            <StyledTemplateArea>
              <label htmlFor="center">Center</label>
              <input id="center" {...register("template", {required: true})} type="radio" value="center"/>
              <label htmlFor="left">Left</label>
              <input id="left" {...register("template", {required: true})} type="radio" value="left"/>
              <label htmlFor="right">Right</label>
              <input id="right" {...register("template", {required: true})} type="radio" value="right"/>
            </StyledTemplateArea>
            <Input id="title" register={register('title', {required: true})}>제목</Input>
            <textarea {...register('content', {required: true})}>내용</textarea>
            <AddImgInput setImgFiles={setFiles}/>
          </div>
          <Button type="submit" size="small">
            작성하기
          </Button>
        </form>
      </StyledFormContainer>
    </>
  )
}

export default Write
