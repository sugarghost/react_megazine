import React, {Suspense, useState} from "react";
import styled from "styled-components";
import useIntersectionObserver from "@hooks/useIntersectionObserver"
import {PostListType} from "../../../interfaces/ApiDataType";

const StyledPostUnit = styled.article`
  width: 100%;
  background: #fff;
  padding: 10px 0 10px;
  box-sizing: border-box;
  margin: 50px 0;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`

function Post({post}: { post: PostListType }) {

  const PostTopBar = React.lazy(() => import("@molecules/PostTopBar"));
  const PostContent = React.lazy(() => import("@molecules/PostContent"));
  const PostLikeInfo = React.lazy(() => import("@molecules/PostLikeInfo"));

  const [inView, setInView] = useState(false)
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) setInView(true);
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });

  const {
    id,
    email,
    content,
    likeCount,
    likeByMe,
    imageUrl,
    nickname,
    title,
    template,
    createdAt
  } = post
  const profileImageUrl = "https://ichef.bbci.co.uk/ne" +
    "ws/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg"
  const imageSrc = imageUrl === null ? undefined : `http://${imageUrl}`
  return (
    <StyledPostUnit key={id}>
      <div ref={setTarget}>
        <Suspense fallback={<div>loading...</div>}>
                {inView &&
                    <>
                      <PostTopBar createdAt={createdAt} post={post} userName={nickname} postId={id} alt={nickname}
                                  src={profileImageUrl} userEmail={email}/>
                      <PostContent content={content} src={imageSrc} alt={title} template={template}/>
                      <PostLikeInfo content={likeCount}
                                    likeByMe={likeByMe}
                                    postId={id}

                      />
                    </>
                }
        </Suspense>
      </div>
    </StyledPostUnit>
  )
}


export default Post
