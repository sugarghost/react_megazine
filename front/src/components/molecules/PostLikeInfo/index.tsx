import React, {useState} from "react";
import styled from "styled-components";
import Text, {TextProps} from "@atoms/Text";
import LikeButton, {LikeByMe} from "@atoms/LikeButton";

const StyledLikeContainer = styled.div`
  display:flex;
  width: 100%;
  border-top: 1px solid #efefef;
  align-items: center;
  padding:10px 10px 0;
  &>p{
    font-size:13px;
    margin-left:5px;
  }
 
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
      <Text content={`${content}  `}/>
    </StyledLikeContainer>
  )
}

export default PostLikeInfo
