import type {ReactNode} from 'react';
import {Flex, FlexProps} from "@chakra-ui/react";

const styles = {
  height: "dvh",
  width: "full",
};

// App-level wrapper – place Sidebar and Body inside
export const AppLayout = ({
                     children,
                     ...props
                   }: {
  children?: ReactNode;
} & FlexProps) => (
    <Flex {...styles} {...props}>
      {children}
    </Flex>
);