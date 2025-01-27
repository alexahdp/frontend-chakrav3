import {type ReactNode, useState} from "react";
import {Flex, FlexProps, IconButton} from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {MenuIcon} from "lucide-react";

const styles = {
  desktopSidebar: {
    hideBelow: "lg", // hide below lg breakpoint
    width: "300px",
    height: "100vh",
    flexDirection: "column",
    bg: "bg.subtle",
    color: "fg.muted",
    borderRight: "1px solid",
    borderColor: "border",
  }
};

// Left sidebar – wrapper around menu on the left side
const SideBar = ({
                   children,
                   ...props
                 }: {
  children?: ReactNode;
} & FlexProps)  => {
  const [openDrawer, setOpen] = useState(false)
  return (
      <>
        <Flex as="nav" {...styles.desktopSidebar} {...props}>
          {children}
        </Flex>
        <DrawerRoot placement="start">
          <DrawerBackdrop/>
          <DrawerTrigger asChild>
            <IconButton hideFrom="lg" position="absolute" top={3.5} left={3} variant="ghost" size="md">
              <MenuIcon/>
            </IconButton>
          </DrawerTrigger>
          <DrawerContent width="300px">
            <DrawerCloseTrigger/>
            <DrawerBody display="flex" flexDirection="column" padding={0} flexGrow={1}
                        height="100vh"> {children} </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      </>
  )
};

export default SideBar;