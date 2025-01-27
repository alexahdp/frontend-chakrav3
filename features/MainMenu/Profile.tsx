import {HStack, Icon, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar";
import {EllipsisIcon} from "lucide-react";

const styles = {
  box: {
    gap: "3",
    paddingX: "3",
    paddingY: "2",
    cursor: "pointer",
    borderRadius: "md",
    _hover: {
      bg: "bg.emphasized/50",
    }
  },
  text: {
    flexGrow: 1,
    color: "fg",
    fontSize: "xs",
  },
};

const Profile = ({...props}) => {
  return (
      <HStack {...styles.box} {...props}>
        <Avatar size="xs" name="Phillip Schleifer" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
                colorPalette="purple"/>
        <Text truncate {...styles.text}>
          Phillip Schleifer {/*place here full name or email, if name not present*/}
        </Text>
        <Icon color="fg.subtle">
          <EllipsisIcon size={16}/>
        </Icon>
      </HStack>
  );
};

export default Profile;