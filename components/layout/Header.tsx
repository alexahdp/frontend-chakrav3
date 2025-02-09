import React, {type ReactNode} from "react";
import {Box, BoxProps, Flex, FlexProps} from "@chakra-ui/react";

const styles = {
  header: {
    color: "fg",
    borderBottom: "1px solid",
    borderColor: "border",
  },
  headerTitle: {
    paddingY: "3",
    paddingLeft: "3",
    paddingRight: "3",
    gap: "3",
    md: { // start from md breakpoint
      gap: "4",
      paddingY: "4",
      paddingLeft: "6",
      paddingRight: "4",
    },
    "& h2": {
      flexGrow: 1,
      fontSize: "xl",
      fontWeight: "semibold",
      md: { // start from md breakpoint
        fontSize: "3xl",
      }
    },
  },
  headerNav: {
    paddingLeft: "6",
    gap: "4",
    justifyContent: "space-between",
  },
};

// Main header wrapper that placed on inside the Body
export const Header = ({
                         children,
                         ...props
                       }: {
  children?: ReactNode;
} & BoxProps) => (
    <Box as="header" {...styles.header} {...props}>
      {children}
    </Box>
);

// Header bar with large title
export const HeaderTitle = ({
                              children,
                              ...props
                            }: {
  children?: ReactNode;
} & FlexProps) => (
    <Flex {...styles.headerTitle} {...props}>
      {children}
    </Flex>
);

// Header bar with service links
export const HeaderNav = ({
                            children,
                            ...props
                          }: {
  children?: ReactNode;
} & FlexProps) => (
    <Flex {...styles.headerNav} {...props}>
      {children}
    </Flex>
);
