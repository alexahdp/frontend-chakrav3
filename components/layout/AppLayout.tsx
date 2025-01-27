import type {ReactNode} from 'react';
import {Flex, FlexProps} from "@chakra-ui/react";

const styles = {
  height: "dvh",
  width: "full",
};

// Main wrapper – place Header and Content inside
const AppLayout = ({
                     children,
                     ...props
                   }: {
  children?: ReactNode;
} & FlexProps) => (
    <Flex {...styles} {...props}>
      {children}
    </Flex>
);

export default AppLayout;