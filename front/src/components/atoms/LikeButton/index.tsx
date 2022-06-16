import React from "react";
import styled from "styled-components";

export interface LikeByMe{
  likeByMe:boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const StyledButton = styled.button`
  display:inline-block;
  outline:none;
  border:none;
  background:none
`
function LikeButton({likeByMe,onClick}: LikeByMe) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {likeByMe?"❤":"🤍"}
    </StyledButton>
  )
}

export default LikeButton
