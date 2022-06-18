import React, {useCallback, useContext} from "react";
import styled,{ThemeContext} from "styled-components";
import Button from "@atoms/Buttons";
import UserThumb,{UserThumbType} from "@molecules/userThumb";
import {useMutation,useQueryClient} from "react-query";
import usePostApi from "@service/usePostApi";

import timeForToday from "@utils/Time/time"

const StyledCardTopBarArea = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  padding:0 10px 10px;
`
const StyledPostInfo = styled.div`
  justify-content: right;
  display:flex;
  align-items: center;
  &>button{
    margin-left:8px;
    font-weight:bold;
  }
  &>p{
    font-size:12px;
  }
`
interface PostTopBarType<T> extends UserThumbType{
  postId :T,
  createdAt:Date,
}
function PostTopBar<T>({userName, src, alt, postId, createdAt}:PostTopBarType<T>){
  const themeContext = useContext(ThemeContext);
  const queryClient = useQueryClient()
  const deletePostApi = usePostApi.delete

  const deleteMutation = useMutation((id:T) => deletePostApi(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('postList');
    },
  });
  /* useCallback으로 안싸면 자기 혼자 실행되고 난리남 */
  const deleteCallBack = useCallback(()=>{
    deleteMutation.mutate(postId)
  },[deleteMutation,postId])
  return (
    <StyledCardTopBarArea>
      <UserThumb alt={alt} src={src} userName={userName}/>
      <StyledPostInfo>
        <p>{timeForToday(createdAt)}</p>

        <Button size="xsmall" bgColor={themeContext.colors.point_6} round="10px"
                color={themeContext.colors.point_0}>수정</Button>
        <Button size="xsmall" onClick={deleteCallBack} bgColor={themeContext.colors.point_4_1} round="10px"
                color={themeContext.colors.point_0}>삭제</Button>
      </StyledPostInfo>
    </StyledCardTopBarArea>
  )
}
export default PostTopBar
