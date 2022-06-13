import React from "react";
import styled from "styled-components";

export interface ImgProps {
  borderSize?: number;
  round?: number;
  alt: string;
  src: string;
  [prop: string]: any;
}

const StyledFigure = styled.figure<ImgProps>`
  display: inline-block;
  background:#efefef;
  border: ${( props ) => props.borderSize ? `${props.borderSize}px solid #efefef`:'none'};
  border-radius: ${( props ) => props.round ? `${props.round}em`:'none'};
`

function Figure({round=0,borderSize=0,alt = "", src = "/"}: ImgProps) {
  const figureProps = {
    borderSize,
    round
  }
  return (
    <StyledFigure {...figureProps}>
      <img alt={alt} src={src}/>
    </StyledFigure>
  )
}

export default Figure
