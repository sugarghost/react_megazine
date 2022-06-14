import React from "react";
import PostContent from "@molecules/PostContent";
import PostTopBar from "@molecules/PostTopBar";
import styled from "styled-components";

const StyledPostUnit = styled.article`
  width:100%;
`

function PostList(){
  const imgUrl = "https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg"
  const imgUrl2 = "https://ssl.pstatic.net/melo" +
    "na/libs/1393/1393124/090620b918227d0f8296_20220609150203104_1.jpg"
  return(
  <StyledPostUnit>
    <PostContent content="으아아아"
                 src={imgUrl2} alt="이미지"/>
    <PostTopBar user_name="이름" alt="유저사진" src={imgUrl}/>
  </StyledPostUnit>
  )
}
export default PostList
