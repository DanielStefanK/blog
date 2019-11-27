export const commonTheme = {
  borderRadius: 6,
  elevation: 2,
  rhythm: i => `${i * 4}px`,
  fancyGardient: (opacity = 0.4) => {
    return `${150}deg, rgba(230, 100, 101,${opacity}) 40%, rgba(145, 152, 229,${opacity})`
  },
  animationCurve: "cubic-bezier(.25,.8,.25,1)",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
}

export const light = {
  light: true,
  textColor: "#292828",
  secondaryTextColor: "#8a8a8a",
  main: "#2a2a2a",
  secondary: "white",
  link: "white",
  brand: "rebeccapurple",
  body: "#ededed",
  backgroud: "#ededed",
  ...commonTheme,
}

export const dark = {
  light: false,
  textColor: "#ebebeb",
  secondaryTextColor: "#adadad",
  secondary: "#2a2a2a",
  link: "white",
  brand: "#fcf571",
  body: "#2a2a2a",
  backgroud: "#4a4a4a",
  ...commonTheme,
}
