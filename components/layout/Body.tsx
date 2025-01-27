import {Flex} from "@chakra-ui/react";

const styles = {
  height: "dvh",
  direction: "column",
  flexGrow: 1,
};

// Main wrapper – place Header and Content inside
const Body = ({
                children,
                ...props
              }) => (
    <Flex {...styles} {...props}>
      {children}
    </Flex>
);

export default Body;