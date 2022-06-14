import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface TextProps extends HTMLAttributes<HTMLElement>{
  content: string | ReactNode;
  importance: 'h1'|'h2'|'h3' | 'h4' | 'h5' | 'h6' | 'p'| ReactNode;
}
const StyledH1 = styled.h1`
  font-weight: 500;
  font-size:32px;
`
const StyledH2 = styled.h2`
  font-weight: 500;
  font-size:28px;
`
const StyledH3 = styled.h3`
  font-weight: 500;
  font-size:24px;
`
const StyledH4 = styled.h4`
  font-weight: 500;
  font-size:22px;
`
const StyledH5 = styled.h5`
  font-weight: 500;
  font-size:20px;
`
const StyledH6 = styled.h6`
  font-weight: 500;
  font-size:18px;
`
const StyledP = styled.p`
  font-weight: 500;
  font-size:16px;
`
function Title({content = '', importance = 'h3'}: TextProps) {
  const getTag = (c:any, i:any) => {
    if (i === 'h1') {
      return <StyledH1>{c}</StyledH1>
    } if (i === 'h2') {
      return <StyledH2>{c}</StyledH2>
    } if (i === 'h3') {
      return <StyledH3>{c}</StyledH3>
    } if (i === 'h4') {
      return <StyledH4>{c}</StyledH4>
    } if (i === 'h5') {
      return <StyledH5>{c}</StyledH5>
    } if (i === 'h6') {
      return <StyledH6>{c}</StyledH6>
    } if (i === 'p') {
      return <StyledP>{c}</StyledP>
    }
  }
  return (
    <>
      {getTag(content,importance)}
    </>
  )
}

export default Title
