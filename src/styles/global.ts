import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  body: {
    '-webkit-font-smoothing': 'antialiased'
  },
  'body, input, textarea, button': {
    fontFamily: 'DM Sans',
    fontWeight: 400
  }
})