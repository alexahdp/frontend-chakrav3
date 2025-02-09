import {createSystem, defaultConfig, defineRecipe} from "@chakra-ui/react"


const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "md",
  },
  variants: {
    size: {
      md: {
        // borderRadius: "lg",
      },
    },
  },
})

export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {
      fonts: {
        heading: {value: "var(--font-literata)",},
        body:{value: "var(--font-geist)",},
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