import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"

import { light, dark, commonTheme } from "../utils/theme"

import ToggleTheme from "./themeToggle"
import Header from "./header"

const { rhythm } = commonTheme

const LayoutEl = styled.div`
  background-color: ${({ theme }) => theme.backgroud};
  color: ${({ theme }) => theme.textColor};
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${() => rhythm(2)} 0px ${() => rhythm(2)};
  font-family: ${({ theme }) => theme.fontFamily};
`

const CenterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${() => rhythm(200)};
  width: 100%;
`

const Footer = styled.footer`
  width: 100%;
`

const Layout = props => {
  const [theme, setTheme] = useState(false)
  const changeTheme = () => {
    setTheme(!theme)
    localStorage.setItem("lightTheme", !theme)
  }

  useEffect(() => {
    const localStorageLayout = localStorage.getItem("lightTheme")
    if (localStorageLayout) {
      setTheme(JSON.parse(localStorageLayout))
    }
  }, [])

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <LayoutEl>
        <CenterLayout>
          <Header title={props.title} location={props.location}>
            <ToggleTheme changeTheme={changeTheme} lightTheme={theme} />
          </Header>
          {props.children}
        </CenterLayout>
        <Footer>© {new Date().getFullYear()} Daniel Stefan Klose</Footer>
      </LayoutEl>
    </ThemeProvider>
  )
}

export default Layout
