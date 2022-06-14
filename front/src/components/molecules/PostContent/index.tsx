import React from "react";
import Figure, {ImgProps} from "@atoms/Figure";
import Text, {TextProps} from "@atoms/Text";
import styled from "styled-components";



const StyledCardArea = styled.div`
  width: 100%;
`
export type PostContentType = ImgProps & TextProps

function PostContent({postText, alt, src}:PostContentType){
  return (
    <StyledCardArea>
      <Text content={postText}/>
      <Figure alt={alt} src={src}/>
    </StyledCardArea>
  )
}
export default PostContent
