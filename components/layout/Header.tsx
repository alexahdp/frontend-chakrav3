import React from "react";
import {Box, Flex, Heading} from "@chakra-ui/react";

const styles = {
  header: {
    color: "fg",
    borderBottom: "1px solid",
    borderColor: "border",
  },
  title: {
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
export const Header: React.FC<{ children: React.ReactNode }> = ({children, ...props}) => {
  return (
      <Box as="header" {...styles.header} {...props}>
        {children}
      </Box>
  );
};

// Header bar with large title
export const HeaderTitle: React.FC<{ children: React.ReactNode, title?: string }> = ({children, title, ...props}) => {
  return (
      <Flex {...styles.title} {...props}>
        {title && <Heading {...styles.heading}>{title}</Heading>}
        {children}
      </Flex>
  );
};

// Header bar with service links
export const HeaderNav: React.FC<{ children: React.ReactNode }> = ({children, ...props}) => {
  return (
      <Flex {...styles.nav} {...props}>
        {children}
      </Flex>
  );
};

