import React,{HTMLAttributes} from 'react';
import styled,{css} from "styled-components";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  flex?: number | 'auto';
  color?: string;
  size?: 'xsmall'|'small' | 'normal' | 'big';
  type?: 'button' | 'submit';
  outline?: string;
  bgColor?: string;
  transparent?: boolean;
  round?:boolean;
  [prop: string]: any;

  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledButton = styled.button<ButtonProps>`
  flex: ${(props: ButtonProps) => props.flex};
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius:${(props: ButtonProps) => (props.round ? '0.25rem' : `0`)};
  border: ${(props: ButtonProps) => (props.outline === 'none' ? 'none' : `1px solid ${props.outline}`)};
  background: ${(props: ButtonProps) => (props.transparent ? 'transparent' : `${props.bgColor}`)};
  color: ${(props: ButtonProps) => props.color};
  cursor: pointer;
  outline: none;
  ${(props: ButtonProps) => {
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
        padding: 14px 20px;
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
                  onClick,
                }: ButtonProps) {
  const commonProps = {
    flex,
    color,
    size,
    outline,
    bgColor,
    transparent,
    type
  };

  return <StyledButton {...commonProps} onClick={onClick}>{children}</StyledButton>
}

export default Button;

