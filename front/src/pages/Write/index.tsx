import React, {useContext, useState} from "react";
import Button from "@atoms/Buttons";
import {Navigate, useNavigate} from "react-router-dom";
import AddImgInput from "@molecules/AddImgInput";
import {FieldValues, useForm} from "react-hook-form";
import Input from "@atoms/Input";
import usePostApi from "@service/usePostApi";
import styled, {ThemeContext} from "styled-components";
import Title from "@atoms/Title";
import { useRecoilValue} from "recoil";
import userToken from "@recoil/userAtoms";
import {useMutation,useQueryClient} from "react-query";

const StyledInputArea = styled.div`
  margin-bottom: 20px;
`
const StyledFormContainer = styled.div`
  h2 {
    text-align: center;
    margin-top: 70px;
  }
`
const StyledFormBody = styled.div`
  max-width: 600px;
  margin: 40px auto;
  width: 100%;
  padding: 25px;
  background: #fff;
  border-radius: 20px;


  input[type=radio] {
    visibility: hidden;
    width: 0;
    height: 0;
  }

  label, input, p {
    font-size: 14px;
  }

  label {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 16px;
  }

  input[type="text"], textarea {
    border: 1px solid #dcdcdc;
  }

`
const StyledTemplateArea = styled.div`
  display: flex;
  justify-content: center;

  label {
    width: 100px;
    cursor:pointer;
    margin-bottom: 20px;
    justify-content: center;
  }
  input:checked + label{
    font-weight:bold;
    color:${({ theme }) => theme.colors.point_2};;
  }
`
const TextAreaBox = styled.div`
  display: flex;

  label {
    width: 100px;
    justify-content: center;
    padding-right: 20px;
  }

  textarea {
    min-height: 300px;
    border: 1px solid #dcdcdc;
    padding: 20px;
    font-size: 14px;
    margin: 10px 0 30px;
    width: calc(100% - 100px);
  }
`
const StyledTitleBox = styled.div`
  display: flex;
  margin-bottom: 15px;

  label {
    width: 100px;
    justify-content: center;
    padding-right: 20px;
  }

  input {
    width: calc(100% - 100px)
  }
`
export type WriteFormFileds = {
  title: string;
  content: string;
  image: File[];
  template: string;
};

function Write() {
  const queryClient = useQueryClient();
  const {register, handleSubmit} = useForm<WriteFormFileds>();
  const [files, setFiles] = useState<File[]>([])
  const token = useRecoilValue(userToken)
  const postApi = usePostApi.post
  const navigate = useNavigate()
  const themeContext = useContext(ThemeContext);
  if (!token) {
    alert('로그인이 필요한 페이지입니다.')
    return <Navigate to="/login" replace/>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation((addData: FieldValues) =>postApi(addData), {
    onSuccess: () => {
      queryClient.invalidateQueries('boader_list');
    },
  });
  const saveBtnClick = (data: FieldValues) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('image', file);
    });
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('template', data.template)
    mutation.mutate(formData)
    navigate('/')
  }
  return (
    <StyledFormContainer>
      <Title content="글 작성하기" importance="h2"/>
      <StyledFormBody>
        <form onSubmit={handleSubmit(saveBtnClick)} encType="multipart/formdata">
          <StyledInputArea>
            <StyledTemplateArea>

              <input id="center" {...register("template", {required: true})} type="radio" value="center"/>
              <label htmlFor="center">Center</label>

              <input id="left" {...register("template", {required: true})} type="radio" value="left"/>
              <label htmlFor="left">Left</label>

              <input id="right" {...register("template", {required: true})} type="radio" value="right"/>
              <label htmlFor="right">Right</label>
            </StyledTemplateArea>
            <StyledTitleBox>
              <Input id="title" register={register('title', {required: true})}>제목</Input>
            </StyledTitleBox>
            <TextAreaBox>
              <label htmlFor="content">내용</label>
              <textarea {...register('content', {required: true})} />
            </TextAreaBox>
            <AddImgInput setImgFiles={setFiles} maxNum={4}/>
          </StyledInputArea>
          <Button type="submit" size="big" bgColor={themeContext.colors.point_0} color="#fff">
            작성하기
          </Button>
        </form>
      </StyledFormBody>
    </StyledFormContainer>
  )
}

export default Write
