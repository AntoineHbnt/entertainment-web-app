import { theme } from "../src/App"
import "../src/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      { name: "dark", value: "#10141E" },
    ]
  }
}

const themes = [theme]
