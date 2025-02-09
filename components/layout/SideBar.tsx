import {type ReactNode} from "react";
import {Flex, FlexProps} from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
} from "@/components/ui/drawer"
import { useMenuContext } from "../providers/menuProvider";

const styles = {
  desktopSidebar: {
    hideBelow: "md", // hide below lg breakpoint
    width: "260px",
    height: "100vh",
    flexDirection: "column",
    bg: "bg.subtle",
    color: "fg.muted",
    borderRight: "1px solid",
    borderColor: "border",
    lg: {
      width: "280px",
    },
    xl: {
      width: "300px",
    },
  },
  mobileSidebar: {
    width: "300px",
    body: {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      flexGrow: 1,
      height: "100vh",
    },
    closeTrigger:{
      top: 4,
      right: 3,
    }
  }
};

// Left sidebar – wrapper around menu on the left side
export const SideBar = ({
                   children,
                   ...props
                 }: {
  children?: ReactNode;
} & FlexProps)  => {
  const { isOpen, setIsOpen } = useMenuContext();
  return (
      <>
        <Flex as="nav" {...styles.desktopSidebar} {...props}>
          {children}
        </Flex>
        <DrawerRoot placement="start" open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <DrawerBackdrop />
          <DrawerContent {...styles.mobileSidebar}>
            <DrawerCloseTrigger {...styles.mobileSidebar.closeTrigger} />
            <DrawerBody {...styles.mobileSidebar.body}>{children}</DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      </>
  )
};