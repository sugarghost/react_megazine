import React from "react";
import PostContent from "@molecules/PostContent";
import PostTopBar from "@molecules/PostTopBar";
import styled from "styled-components";
import PostLikeInfo from "@molecules/PostLikeInfo";
import {PostListType} from "../../../interfaces/ApiDataType";


const StyledPostUnit = styled.article`
  width: 100%;
  background: #fff;
  padding: 10px 0 10px;
  box-sizing: border-box;
  margin: 50px 0;
  box-shadow: 0 0 12px rgba(0,0,0,0.05);
  border-radius: 10px;
`

function Post({post}: { post: PostListType }) {
  const {
    id,
    content,
    likeCount,
    likeByMe,
    imageUrl,
    nickname,
    title,
    template,
    createdAt
  }= post
  const profileImageUrl ="https://ichef.bbci.co.uk/ne" +
    "ws/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg"
  console.log(post)
  return (
    <StyledPostUnit key={id}>
      <PostTopBar userName={nickname} alt={nickname} createdAt={createdAt} src={profileImageUrl}/>
      <PostContent content={content} src={`http://${imageUrl}`} alt={title} template={template}/>
      <PostLikeInfo content={likeCount}
                    likeByMe={likeByMe}
      />
    </StyledPostUnit>
  )
}


export default Post
