import React from "react";
import ListTemplate from "@templates/ListTemplate";
import {useRecoilState} from "recoil";
import {useQuery} from "react-query";
import Text from "@atoms/Text";
import {postListState} from "../../recoil/postList";
import usePostApi from "../../service/usePostApi";

function List() {
  const [postList, setPostList] = useRecoilState(postListState)
  const {isLoading} = useQuery(
    'postList', usePostApi.get, {
      onSuccess: data => {
        setPostList(data)
      },
      onError: e => {
        console.log(e)
      }
    }
  )
  if (isLoading) {
    return <Text content="로딩중!"/>
  }
  return (
    <ListTemplate listData={postList}/>
  )
}

export default List
