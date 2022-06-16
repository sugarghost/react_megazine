import React from "react";
import PostContent from "@molecules/PostContent";
import PostTopBar from "@molecules/PostTopBar";
import styled from "styled-components";
import PostLikeInfo from "@molecules/PostLikeInfo";
import {PostListType} from "../../../interfaces/ApiDataType";


const StyledPostUnit = styled.article`
  width: 100%;
  background:#fff;
  padding:5px 10px 10px;
  box-sizing: border-box;
  margin:20px 0;
`

function PostList({post}: { post: PostListType }) {
  const {
    post_id:postId,
    content,
    like_count:likeCount,
    like_by_me:likeByMe,
    profile_image_url:profileImage,
    image_url:imgUrl,
    nickname,
    title,
    template
  }= post

  return (
    <StyledPostUnit key={postId}>
      <PostTopBar userName={nickname} alt={nickname} src={profileImage}/>
      <PostContent content={content} src={imgUrl} alt={title} template={template}/>
      <PostLikeInfo content={likeCount}
                    likeByMe={likeByMe}
      />
    </StyledPostUnit>
  )
}


export default PostList
