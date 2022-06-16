import React from "react";
import Figure, {ImgProps} from "@atoms/Figure";
import styled from "styled-components";

export interface PostTopBarType extends ImgProps{
  userName:string
}

const StyledUserInfo = styled.div`
  text-align:left;
  display:flex;
  align-items: center;
  &>p{
    font-size:14px;
    margin-left:10px;
  }
`
function UserThumb({userName, src, alt}:PostTopBarType){
  return (
      <StyledUserInfo>
        <Figure alt={alt} src={src} round={100} width={30} height={30}/>
        <p>{userName}</p>
      </StyledUserInfo>
  )
}
export default UserThumb
