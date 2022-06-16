import React, {ReactNode} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display:block;
  padding: 10px 20px;
  font-size:20px;
  color: ${({ theme }) => theme.colors.point_0};
`

interface LinkType {
  linkUrl: string;
  children?: ReactNode;
}

function NavButton({linkUrl, children}: LinkType) {
  return(
    <StyledLink to={linkUrl}>
      {children}
    </StyledLink>
  )
}

export default NavButton
