import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";
import {InputProps} from "@atoms/Input";

export interface TextProps extends HTMLAttributes<HTMLTextAreaElement>{
  id: string;
  children? : string | ReactNode
  [prop: string]: any;
}
const StyledP = styled.textarea`
  font-size:14px;
  line-height:1.4;
`

const StyledLabel = styled.label<InputProps>`
  display:inline-block;
  border: ${(props) => props.borderSize ? `${props.borderSize}px solid #ccc` : 'none'};
  border-radius: ${(props) => props.round ? `${props.round}em` : 'none'};
`
function Text({id, borderSize, round, children, register}: TextProps) {

  return (
    <StyledLabel borderSize={borderSize} round={round}>
      {children}
    <StyledP id={id} {...register}/>
    </StyledLabel>
  )
}

export default Text
