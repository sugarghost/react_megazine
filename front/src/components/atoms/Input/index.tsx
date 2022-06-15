import React, {HTMLAttributes, ReactNode} from "react";
import styled, {css} from "styled-components";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  padding?: 'big' | 'small' | 'normal';
  children?: ReactNode;
  placeholder?:any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?:number;
  minLength?:number;
  inputValue?:any;
  [prop: string]: any;
}



export interface ComponentProps extends InputProps {
  borderSize?: number;
  round?: number;
}

const StyledInput = styled.input<InputProps>`
  outline: none;
  border:none;
  ${(props) => {
    if (props.padding === 'small') {
      return css`
        padding: 10px 12px;
      `;
    }
    if (props.padding === 'normal') {
      return css`
        padding: 10px 12px;
      `;
    }
    if (props.padding === 'big') {
      return css`
        padding: 15px 20px;
      `;
    }
  }}
`
const StyledLabel = styled.label<InputProps>`
  display:inline-block;
  border: ${(props) => props.borderSize ? `${props.borderSize}px solid #ccc` : 'none'};
  border-radius: ${(props) => props.round ? `${props.round}em` : 'none'};
`

function Input({
                 id, name, borderSize, round,placeholder,
                 type = "text", padding = "normal", children,
                 required=false,onChange,maxLength=524288, minLength=0,inputValue,
                 register
               }: ComponentProps) {

  return (
    <StyledLabel borderSize={borderSize} round={round}>
      {children}
      <StyledInput type={type} name={name} id={id} padding={padding}
                   required={required} placeholder={placeholder}
                   maxLength={maxLength} minLength={minLength}
                   onChange={onChange} ref={inputValue} {...register}/>
    </StyledLabel>
  )
}

export default Input
