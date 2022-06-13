import React, {HTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

export interface TextProps extends HTMLAttributes<HTMLElement>{
  content: string | ReactNode;
  importance: 'h3' | 'h4' | 'h5' | 'h6' | 'p'| ReactNode;
}

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
const getTag = (content:any, importance:any) => {

  console.log(importance,content)
  if (importance === 'h3') {
    return <StyledH3>{content}</StyledH3>
  } if (importance === 'h4') {
    return <StyledH4>{content}</StyledH4>
  } if (importance === 'h5') {
    return <StyledH5>{content}</StyledH5>
  } if (importance === 'h6') {
    return <StyledH6>{content}</StyledH6>
  } if (importance === 'p') {
    return <StyledP>{content}</StyledP>
  }
}
function SubTitle({content = '', importance = 'h3'}: TextProps) {
  console.log(getTag)
  return (
    <>
      {getTag(content,importance)}
    </>
  )
}

export default SubTitle
