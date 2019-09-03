import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components"

const SimpleButton = styled.button`
  border-radius: 50%;
  background-color: inherit;
  color: ${props => (props.light ? "#32164f" : "#fcdb05")};
  width: 1.6em;
  height: 1.6em;
  font-size: 1.5em;
  text-align: center;
  border: none;
  &:hover {
    background-color: ${props =>
      props.light ? "rgba(50, 22, 79, 0.2)" : "rgba(252, 219, 5, 0.2)"};
    transition: all 0.3s;
  }
  transition: all 0.3s;
  cursor: pointer;
`

const FAIcon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
`

const ThemeToggle = ({ changeTheme, lightTheme }) => (
  <SimpleButton light={lightTheme} onClick={changeTheme}>
    <FAIcon icon={lightTheme ? faMoon : faSun} />
  </SimpleButton>
)

export default ThemeToggle
