import React, { useState, useEffect } from "react"

import { rhythm } from "../utils/typography"

import styled, { ThemeProvider } from "styled-components"

import ToggleTheme from "./themeToggle"
import Header from "./header"

const light = {
  light: true,
  main: "#2a2a2a",
  secondary: "white",
  link: "white",
  brand: "rebeccapurple",
  body: "white",
}

const dark = {
  light: false,
  main: "white",
  secondary: "#2a2a2a",
  link: "white",
  brand: "#fcf571",
  body: "#2a2a2a",
}

const LayoutEl = styled.div`
  height: 100vh;
  background-color: ${props =>
    props.theme.secondary ? props.theme.body : undefined};
  color: ${props => (props.theme.secondary ? props.theme.main : undefined)};
`

const CenterLayout = styled.div`
  margin-left: auto;
  height: 100vh;
  margin-right: auto;
  max-width: ${() => rhythm(24)};
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
