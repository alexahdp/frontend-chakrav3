import {Button} from "@chakra-ui/react"

const styles = {
  box: {
    justifyContent: "start",
    width: "full",
    height: "10",
    spacing: "4",
    paddingX: "3",
    gap: "3",
    borderRadius: "md",
    color: "fg",
    transition: "backgrounds",
    transitionTimingFunction: "ease-in",
    _hover: {
      bg: "bg.emphasized/50",
      color: "fg"
    },
    "&.selected": {
      bg: "bg.emphasized/50",
      color: "fg",
    },
    "&.sm": {
      height: "8",
      textStyle: "xs",
    }
  },
};

const NavItem = ({
                   children,
                   href = "",
                   selected = false,
                   size = "md",
                   ...props
                 }) => (
    <Button
        variant="ghost"
        className={`
            ${selected ? "selected" : ""} 
            ${size === "sm" ? "sm" : ""}
        `}
        size={size}
        {...styles.box}
        {...props}
    >
      {children}
    </Button>
)

export default NavItem;