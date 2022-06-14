import React from "react";
import Figure, {ImgProps} from "@atoms/Figure";
import styled from "styled-components";
import Button from "@atoms/Buttons";

const StyledCardTopBarArea = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
`
const StyledUserInfo = styled.div`
  text-align:left;
`
const StyledPostInfo = styled.div`
  text-align:right;
`
interface PostTopBar extends ImgProps{
  user_name:string
}

function PostContent({user_name, src, alt}:PostTopBar){
  return (
    <StyledCardTopBarArea>
      <StyledUserInfo>
        <Figure alt={alt} src={src}/>
        <p>{user_name}</p>
      </StyledUserInfo>
      <StyledPostInfo>
        <Button size="small" bgColor="#000" color="#fff">수정</Button>
        <p>17시간 전</p>
      </StyledPostInfo>
    </StyledCardTopBarArea>
  )
}
export default PostContent
