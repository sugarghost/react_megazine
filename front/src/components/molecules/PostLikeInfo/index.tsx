import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Text, {TextProps} from "@atoms/Text";
import LikeButton, {LikeByMe} from "@atoms/LikeButton";
import {useMutation, useQueryClient} from "react-query";
import usePostApi from "@service/usePostApi";

const StyledLikeContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #efefef;
  align-items: center;
  padding: 10px 10px 0;

  & > p {
    font-size: 13px;
    margin-left: 5px;
  }

`

export interface PostLikeInfoType<V> extends LikeByMe, TextProps {
  postId: V;
}

function PostLikeInfo<V>({likeByMe, postId, ...props}: PostLikeInfoType<V>) {
  const {content} = props
  const likePostApi = usePostApi.likePost
  const toggle = (data: boolean) => !data
  const queryClient = useQueryClient()
  const [postLike, setPostLike] = useState(likeByMe)
  const likeMutation = useMutation((id: V) => likePostApi(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('postList');
    },
  });
  const callBackToggleLike = useCallback(()=>{
    const likeState = toggle(postLike)
    setPostLike(likeState)
    likeMutation.mutate(postId)
  },[likeMutation, postId, postLike])
  return (
    <StyledLikeContainer>
      <LikeButton likeByMe={postLike} onClick={callBackToggleLike}/>
      <Text content={`${content}`}/>
    </StyledLikeContainer>
  )
}

export default PostLikeInfo
