import React from "react";
import Figure, {ImgProps} from "@atoms/Figure";
import Text, {TextProps} from "@atoms/Text";
import styled,{css} from "styled-components";

interface TemplateType{template:'left'|'center'|'right' }

type PostContentTYpe = ImgProps & TextProps & TemplateType
const StyledCardArea = styled.div<TemplateType>`
  display:flex;
  flex-wrap: wrap;
  &>*{
    width:100%
  }
  ${(props)=>{
    if(props.template==='left'){
      return css`
        justify-content: left;
        &>*{
          width:50%
        }
      `
    }
    if(props.template==='right'){
      return css`
        justify-content: right;
        &>*{
          width:50%
        }
      `
    }
  }}
  width: 100%;
`


function PostContent({content, alt, src,template}:PostContentTYpe){
  return (
    <StyledCardArea template={template}>
      <Figure alt={alt} src={src}/>
      <Text content={content}/>
    </StyledCardArea>
  )
}
export default PostContent
