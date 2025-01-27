import type {ReactNode} from "react";
import {Flex, FlexProps} from "@chakra-ui/react";

const styles = {
  height: "dvh",
  direction: "column",
  flexGrow: 1,
};

// Main wrapper – place Header and Content inside
const Body = ({
                children,
                ...props
              }: {
  children?: ReactNode;
} & FlexProps) => (
    <Flex {...styles} {...props}>
      {children}
    </Flex>
);

export default Body;