import React from "react";
import Figure, {ImgProps} from "@atoms/Figure";
import styled from "styled-components";



const StyledCardArea = styled.div`
  width: 100%;
`
interface PostTopBar extends ImgProps{
  user_name:string
}

function PostLikeInfo({user_name, postImgUrl}:PostTopBar){
  return (
    <StyledCardArea>
      <div>
      <Figure alt="cat" src={postImgUrl}/>
        <p>{user_name}</p>
      </div>
    </StyledCardArea>
  )
}
export default PostLikeInfo
