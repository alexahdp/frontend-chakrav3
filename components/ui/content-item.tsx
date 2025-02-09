import type {ReactNode} from "react";
import {Box, BoxProps} from "@chakra-ui/react";

const styles = {
  item: {
    w: "full",
    bg: "bg",
    borderRadius: "lg",
    paddingX: "5",
    paddingTop: "3",
    paddingBottom: "4",
    boxShadow: "xs",
    _hover: {
      boxShadow: "sm",
    },
  },
  title: {
    paddingBottom: "4",
    fontSize: "lg",
    fontWeight: "semibold",
    flexGrow: 1,
  },
  buttons: {
    marginRight: -2,
    gap: 1,
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity",
    transitionTimingFunction: "ease-in",
  }
};

// Left sidebar – wrapper around menu on the left side
export const ContentItem = ({children}: { children?: ReactNode },
                     {props}: { props?: BoxProps },
) => (
    <Box {...styles.item} {...props}>
      {children}
    </Box>
);