import React from 'react';
import styled,{css} from "styled-components";

type GreetFunction = () => void;
export interface ButtonProps extends StyledButtonProps{
  children?: React.ReactNode;
  onClick?: GreetFunction;
}
export interface StyledButtonProps {
  flex?: number | 'auto';
  color?: string;
  size?: 'xsmall'|'small' | 'normal' | 'big';
  type?: 'button' | 'submit';
  outline?: string;
  bgColor?: string;
  transparent?: boolean;
  round?:string;

  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  [prop: string]: any;
}
const StyledButton = styled.button<StyledButtonProps>`
  flex: ${(props) => props.flex};
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius:${(props) => (props.round ? props.round : `0`)};
  border: ${(props) => (props.outline === 'none' ? 'none' : `1px solid ${props.outline}`)};
  background: ${(props) => (props.transparent ? 'transparent' : `${props.bgColor}`)};
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  ${(props) => {
  if (props.size === 'xsmall') {
    return css`
        padding:5px 7px;
        font-size:12px;
      `;
  }
  if (props.size === 'small') {
    return css`
        padding:8px 10px;
      font-size:12px;
      `;
  }
  if (props.size === 'normal') {
    return css`
        padding: 10px 12px;
      `;
  }
  if (props.size === 'big') {
    return css`
        width: 100%;
        padding: 18px 20px;
      `;
  }
}}
`;

function Button({
                  children,
                  flex = 'auto',
                  color = 'black',
                  outline = 'none',
                  bgColor = 'white',
                  transparent = false,
                  size = 'normal',
                  type = 'button',
                  round,
                  onClick,
                  ...props
                }: ButtonProps) {
  const commonProps = {
    flex,
    color,
    size,
    outline,
    bgColor,
    transparent,
    type,
    round
  };

  const onClickEvent = onClick
  return <StyledButton  onClick={onClickEvent} {...commonProps}
                       {...props}>{children}</StyledButton>
}

export default Button;

