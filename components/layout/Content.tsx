import {Flex} from "@chakra-ui/react";

const styles = {
  direction: "column",
  flexGrow: 1,
  height: "100%",
  overflowY: "auto",
  padding: "3",
  paddingTop: "0",
  lg: {
    padding: "4",

  }
};

// Scrollable area under the header
const Content = ({
                   children,
                   ...props
                 }) => (
    <Flex {...styles} {...props}>
      {children}
    </Flex>
);

export default Content;