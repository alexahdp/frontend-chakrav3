import {createSystem, defaultConfig} from "@chakra-ui/react"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {value: "var(--font-literata)",},
        body: {},
      },
      fontWeights: {}
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: {_dark: "{colors.gray.900}"},
          },
          subtle: {
            value: {_dark: "{colors.gray.950}"},
          },
          muted: {
            value: {_dark: "{colors.black}"},
          },
        }
      },
    }
  },
  globalCss: {
    "body": {
      fontWeight: "medium",
      background: "bg.muted",
    },
    ".lucide": {
      strokeWidth: "1.75"
    },
  },
});

export default system