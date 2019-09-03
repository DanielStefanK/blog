import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const HeadWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`

const LinkItem = styled(Link)`
  color: ${props => (props.theme.secondary ? props.theme.main : undefined)};
  text-align: center;
  position: relative;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  ${props =>
    props.active
      ? `
      &:after {
        
      display: block;
      content: "";
      border-bottom: solid 2px;`
      : `
    &:after {
      display: block;
      content: "";
      border-bottom: solid 2px;
      transform: scaleX(0);
      transition: transform 150ms;
    }
  
    &:hover:after {
      transform: scaleX(1.2);
    }
    `}
`

const Logo = styled.h3`
  font-family: Montserrat, sans-serif;
  display: "inline";
  margin-top: 0;
  transition: all 0.2s;

  &:hover {
    transform: scale(1) rotateZ(-2deg);
  }
`

const Header = ({ location, title, children }) => {
  return (
    <HeadWrapper>
      <Logo>
        <Link
          css={`
            color: ${props => props.theme.brand || "inherit"};
          `}
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </Logo>
      <LinkWrapper>
        <LinkItem
          active={location.pathname === `${__PATH_PREFIX__}/blog`}
          to={`/blog`}
        >
          Blog
        </LinkItem>
        <LinkItem
          active={location.pathname === `${__PATH_PREFIX__}/about`}
          to={`/about`}
        >
          About
        </LinkItem>
        {children}
      </LinkWrapper>
    </HeadWrapper>
  )

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
}

export default Header
