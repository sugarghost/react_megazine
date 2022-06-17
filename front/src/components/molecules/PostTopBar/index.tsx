import React,{useContext} from "react";
import styled,{ThemeContext} from "styled-components";
import Button from "@atoms/Buttons";
import UserThumb,{PostTopBarType} from "@molecules/userThumb";
import timeForToday from "@utils/Time/time"

const StyledCardTopBarArea = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  padding:0 10px 10px;
`
const StyledPostInfo = styled.div`
  justify-content: right;
  display:flex;
  align-items: center;
  &>button{
    margin-left:8px;
    font-weight:bold;
  }
  &>p{
    font-size:12px;
  }
`
function PostTopBar({userName, src, alt, createdAt}:PostTopBarType){
  const themeContext = useContext(ThemeContext);


  return (
    <StyledCardTopBarArea>
      <UserThumb alt={alt} src={src} userName={userName}/>
      <StyledPostInfo>
        <p>{timeForToday(createdAt)}</p>
        <Button size="xsmall" bgColor={themeContext.colors.point_6} round="10px"
                color={themeContext.colors.point_0}>수정</Button>
        <Button size="xsmall" bgColor={themeContext.colors.point_4} round="10px"
                color={themeContext.colors.point_0}>삭제</Button>
      </StyledPostInfo>
    </StyledCardTopBarArea>
  )
}
export default PostTopBar
