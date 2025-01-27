import {Center, Stack} from "@chakra-ui/react";

const styles = {
  gap: 4,
  paddingBottom: 24,
  flexGrow: 1,
  maxWidth: "768px",
};

// Main template for the List of content items
const ContentList = ({
                       children,
                       ...props
                     }) => (
    <Center>
      <Stack {...styles} {...props}>
        {children}
      </Stack>
    </Center>
);

export default ContentList;