import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"

import { light, dark, commonTheme } from "../utils/theme"

import ToggleTheme from "./themeToggle"
import Header from "./header"

const { rhythm } = commonTheme

const LayoutEl = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.backgroud};
  color: ${({ theme }) => theme.textColor};
  transition: all 0.4s;
  font-family: ${({ theme }) => theme.fontFamily};
`

const CenterLayout = styled.div`
  margin-left: auto;
  min-height: 100vh;
  height: 100%;
  margin-right: auto;
  max-width: ${() => rhythm(200)};
  padding: ${() => rhythm(1.5)} ${() => rhythm(3 / 4)};
`

const Layout = props => {
  const [theme, setTheme] = useState(true)
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
          <header>
            <Header title={props.title} location={props.location}>
              <ToggleTheme changeTheme={changeTheme} lightTheme={theme} />
            </Header>
          </header>
          <main
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {props.children}
          </main>
          <footer>© {new Date().getFullYear()} Daniel Stefan Klose</footer>
        </CenterLayout>
      </LayoutEl>
    </ThemeProvider>
  )
}

export default Layout
