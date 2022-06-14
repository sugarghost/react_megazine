import React from "react";
// import {useQuery} from "react-query";
// import {AxiosError} from "axios";
import ListTemplate from "@templates/ListTemplate";
// import {PostListType} from "../../interfaces/ApiDataType";
// import usePostApi from "../../service/usePostApi";

function List() {
 // const getPostList = usePostApi.get
/*
const GetPostQuery = ()=>{
  const {status, data} = useQuery<PostListType[], AxiosError>(['postlist'], getPostList);
  if (status === "loading") {
    return `<span>Loading...</span>`;
  }
  if (status === "error") {
    return `<span>Error: {error.message}</span>`;
  }
    return data
  }
  */

  return (
    <ListTemplate />
  )
}

export default List
