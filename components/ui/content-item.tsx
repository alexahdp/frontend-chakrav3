import {Box, Flex, IconButton, Text} from "@chakra-ui/react";
import {Tooltip} from "@/components/ui/tooltip";
import Link from "next/link";
import {EllipsisIcon, PencilIcon, TrashIcon} from "lucide-react";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";

const styles = {
  item: {
    w: "full",
    bg: "bg",
    borderRadius: "lg",
    paddingX: "5",
    paddingTop: "3",
    paddingBottom: "4",
    boxShadow: "xs",
    _hover: {
      boxShadow: "sm",
    },
  },
  title: {
    paddingBottom: "4",
    fontSize: "lg",
    fontWeight: "semibold",
    flexGrow: 1,
  },
  buttons: {
    marginRight: -2,
    gap: 1,
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity",
    transitionTimingFunction: "ease-in",
  }
};

// Left sidebar – wrapper around menu on the left side
const ContentItem = ({
                       children,
                       ...props
                     }) => (

    <Box {...styles.item} {...props}>
      {children}
    </Box>
);

export default ContentItem;