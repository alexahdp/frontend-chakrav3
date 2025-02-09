import type {ReactNode} from "react";
import {Flex, FlexProps} from "@chakra-ui/react";

const styles = {
  height: "dvh",
  direction: "column",
  flexGrow: 1,
};

// Main page part wrapper – place Header and Content inside
export const Body = ({
                children,
                ...props
              }: {
  children?: ReactNode;
} & FlexProps) => (
    <Flex {...styles} {...props}>
      {children}
    </Flex>
);