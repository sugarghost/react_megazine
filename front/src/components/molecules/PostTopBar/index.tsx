import React from "react";
import styled from "styled-components";
import Button from "@atoms/Buttons";
import UserThumb,{PostTopBarType} from "@molecules/userThumb";

const StyledCardTopBarArea = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
`
const StyledPostInfo = styled.div`
  justify-content: right;
  display:flex;
  align-items: center;
  &>button{
    margin-left:10px;
  }
`
function PostTopBar({userName, src, alt}:PostTopBarType){
  return (
    <StyledCardTopBarArea>

      <UserThumb alt={alt} src={src} userName={userName}/>
      <StyledPostInfo>
        <p>17시간 전</p>

        <Button size="small" bgColor="#000" color="#fff">수정</Button>
      </StyledPostInfo>
    </StyledCardTopBarArea>
  )
}
export default PostTopBar
