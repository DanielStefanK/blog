import styled from "styled-components"

import { commonTheme } from "../utils/theme"

const { animationCurve, elevation: el, borderRadius, rhythm } = commonTheme

/**
 * @param radius increase the radius of the card in 6px steps
 * @param hover increase the hover effect
 */
export const Card = styled.div`
  border-radius: ${({ radius = 1 }) => borderRadius * radius}px;

  padding: 0px;

  margin: 0px;

  background-color: ${props => props.theme.body};

  transition: all 0.6s ${() => animationCurve};

  ${({ elevation = 1 }) =>
    el !== 0 &&
    `box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 ${`${elevation *
      el}px ${elevation * el}px`} rgba(0, 0, 0, 0.23);`}

  ${({ hover, elevation = 1, theme }) =>
    hover !== undefined &&
    `&:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 ${`${elevation *
        hover *
        el}px ${elevation * hover * el}px`} rgba(0, 0, 0, 0.23);
      z-index: 2;
    }`}
`

export const CardText = styled.div`
  padding: ${() => `${rhythm(0)} ${rhythm(2)} ${rhythm(1)} ${rhythm(2)}`};
  margin: 0px;
  color: ${({ theme }) => theme.secondaryTextColor};
`

export const CardTitle = styled.div`
  font-size: 1.5em;
  margin: 0px;
  padding: ${() => `${rhythm(2)} ${rhythm(2)} ${rhythm(0)} ${rhythm(2)}`};
`
