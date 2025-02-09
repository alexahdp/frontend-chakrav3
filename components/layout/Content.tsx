import type {ReactNode} from "react";
import {Flex, FlexProps} from "@chakra-ui/react";

const styles = {
  direction: "column",
  flexGrow: 1,
  height: "100%",
  overflowY: "auto",
  padding: "3", // 1 = 0.25rem,  1rem = 16px, 16 * 3 * 0.25 = 12
  paddingTop: "0",
  md: {
    padding: "4",
  }
};

// Scrollable area under the header
export const Content = ({
                   children,
                   ...props
                 }: {
  children?: ReactNode;
} & FlexProps) => (
    <Flex {...styles} {...props}>
      {children}
    </Flex>
);