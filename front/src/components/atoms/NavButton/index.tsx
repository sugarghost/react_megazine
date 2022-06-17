import React, {ReactNode} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  display:block;
  padding: 10px 20px;
  font-size:20px;
  color: ${({ theme }) => theme.colors.gray_2};
  &.active{
    color: ${({ theme }) => theme.colors.point_2};
  }
`

interface LinkType {
  linkUrl: string;
  children?: ReactNode;
  onClick?:any
}

function NavButton({onClick,linkUrl, children}: LinkType) {
  return(
    <StyledLink to={linkUrl} onClick={onClick} >
      {children}
    </StyledLink>
  )
}

export default NavButton
