import React, {type ReactNode} from "react";
import {Box, BoxProps, Flex, FlexProps, Heading,} from "@chakra-ui/react";

const styles = {
  header: {
    color: "fg",
    borderBottom: "1px solid",
    borderColor: "border",
  },
  headerTitle: {
    paddingY: "3",
    paddingLeft: "6",
    paddingRight: "3",
    gap: "4",
    lg: {
      paddingY: "4",
      paddingLeft: "6",
      paddingRight: "4",
    }
  },
  heading: {
    flexGrow: 1,
    fontSize: "xl",
    fontWeight: "semibold",
    paddingLeft: 8,
    md: {
      fontSize: "3xl",
      paddingLeft: 0,
    }
  },
  nav: {
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
                              title,
                              ...props
                            }: {
  children?: ReactNode;
  title?: string;
} & FlexProps) => (
    <Flex {...styles.headerTitle} {...props}>
      {title && <Heading {...styles.heading}>{title}</Heading>}
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
    <Flex {...styles.nav} {...props}>
      {children}
    </Flex>
);
