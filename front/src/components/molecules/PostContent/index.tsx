import React from "react";
import Figure, {ImgProps} from "@atoms/Figure";
import Text, {TextProps} from "@atoms/Text";
import styled,{css} from "styled-components";

interface TemplateType{template:number;}

type PostContentTYpe = ImgProps & TextProps & TemplateType
const StyledCardArea = styled.div<TemplateType>`
  display:flex;
  flex-wrap: wrap;
  &>*{
    width:100%
  }
  ${(props)=>{
  if(props.template===1){
    return css`
        justify-content: left;
        &>*{
          width:50%
        }
      `
  }
  if(props.template===3){
    return css`
        justify-content: left;
        flex-direction: row-reverse;
        &>*{
          width:50%
        }
      `
  }
}}
  width: 100%;
`
const StyledTextArea = styled.div`
  padding:15px;
  p{
    line-height:1.6;
  }
`
const StyledFigureArea = styled.div`
  padding:0 0 0px;
`



function PostContent({content, alt, src,template}:PostContentTYpe){
  return (
    <StyledCardArea template={template}>
      <StyledFigureArea>
        <Figure alt={alt} src={src} height="100%"/>
      </StyledFigureArea>
      <StyledTextArea>
        <Text content={content}/>
      </StyledTextArea>
    </StyledCardArea>
  )
}
export default PostContent
