import type {ReactNode} from "react";
import {Center, Stack, StackProps} from "@chakra-ui/react";

const styles = {
  gap: 4,
  paddingBottom: 24,
  flexGrow: 1,
  maxWidth: "768px",
};

// Main template for the List of content items
export const ContentList = ({
                       children,
                       ...props
                     }: {
  children?: ReactNode;
} & StackProps) => (
    <Center>
      <Stack {...styles} {...props}>
        {children}
      </Stack>
    </Center>
);
