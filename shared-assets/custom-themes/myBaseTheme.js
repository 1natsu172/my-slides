import { future as theme } from 'mdx-deck/themes'

const baseFontFamily = 'sans-serif, "Noto Sans JP", "YuGothic", "Yu Gothic"'
const minchoFontFamily = 'Sawarabi Mincho'
const codeFontFamily =
  'Monaco,Consolas,Courier New,Courier,monospace,sans-serif'

const header = {
  'text-transform': 'none'
}

const myBaseTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#002C2B'
  },
  h1: {
    ...(theme.h1 || {}),
    ...header
  },
  h2: {
    ...(theme.h2 || {}),
    ...header
  },
  font: baseFontFamily,
  // @TODO mdx-deck@v2
  // googleFont:
  //   'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Sawarabi+Mincho',
  quote: {
    borderLeft: '6px solid #888',
    paddingLeft: '20px',
    fontSize: '0.8em',
    fontWeight: 'normal'
  },
  pre: {
    fontSize: '24px'
  },
  code: {
    codeFontFamily
  },
  i: {
    fontSize: '24px'
  }
}

export default extendStyles => ({
  ...myBaseTheme,
  ...extendStyles
})
