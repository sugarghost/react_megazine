import React from "react";
import styled from "styled-components";
import PostList from "@organisms/PostList";

const StyledPostListContainer = styled.article`
 max-width:600px;
  margin:0 auto;
`
function ListTemplate(){
  return(
    <StyledPostListContainer>
    <PostList/>
    </StyledPostListContainer>
  )
}
export default ListTemplate
