import React, {useState} from "react";
import styled from "styled-components";
import Text, {TextProps} from "@atoms/Text";
import LikeButton, {LikeByMe} from "@atoms/LikeButton";

const StyledLikeContainer = styled.div`
  display:flex;
  width: 100%;
  border-top: 1px solid #efefef;
`
export interface PostLikeInfoType extends LikeByMe,TextProps{
  likeByMe:boolean
}

function PostLikeInfo({likeByMe,...props}: PostLikeInfoType) {
  const {content} = props
  const toggle = (data:boolean)=>!data
  const [postLike,setPostLike] = useState(likeByMe)
  const togglePostLike = ()=>{
    const likeState = toggle(postLike)
    setPostLike(likeState)
    if(likeState){
      // 좋아요 delete
    }else{
      // 좋아요 post
    }
  }
  return (
    <StyledLikeContainer>
      <LikeButton likeByMe={postLike} onClick={togglePostLike} />
      <Text content={`${content}개`}/>
    </StyledLikeContainer>
  )
}

export default PostLikeInfo
