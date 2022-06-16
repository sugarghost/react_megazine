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
  padding:10px;
`
const StyledFigureArea = styled.div`
  padding:0 0 0px;
`



function PostContent({content, alt, src,template}:PostContentTYpe){
  return (
    <StyledCardArea template={template}>
      <StyledFigureArea>
      <Figure alt={alt} src={src}/>
      </StyledFigureArea>
      <StyledTextArea>
      <Text content={content}/>
      </StyledTextArea>
    </StyledCardArea>
  )
}
export default PostContent
