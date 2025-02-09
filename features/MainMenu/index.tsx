import Link from "next/link";
import {Box, Flex, Separator, Stack} from "@chakra-ui/react";
import { NavItem } from "@/components/ui/nav-item";
import {FilePenLineIcon, LifeBuoyIcon, ListTodoIcon, MessageCircleQuestionIcon, SendIcon} from "lucide-react";
import {Logo} from "./Logo";
import {ProfileMenu} from "./ProfileMenu";
import {styles} from "./styles";

export const MainMenu = () => {
  return (
      <>
        <Flex {...styles.logoWrap}>
          <Link href="/">
            <Logo/>
          </Link>
        </Flex>
        <Stack {...styles.panelWrap}>
          <Stack {...styles.menuWrap}>
              <NavItem selected asChild>
                <Link href="/my-tests"><FilePenLineIcon/>My tests</Link>
              </NavItem>
            <NavItem asChild>
              <Link href="/my-tests"> <ListTodoIcon/>Results</Link>
            </NavItem>
            <Separator variant="solid" {...styles.separator} />
            <NavItem><MessageCircleQuestionIcon/>Tests catalog</NavItem>
          </Stack>
          <Stack {...styles.menuWrap}>
            <NavItem size="sm"><LifeBuoyIcon/>Help</NavItem>
            <NavItem size="sm"><SendIcon/>Feedback</NavItem>
          </Stack>
        </Stack>
        <Box {...styles.profileWrap}>
          <Separator variant="solid" {...styles.separator} marginTop={1} />
          <ProfileMenu/>
        </Box>
      </>
  );
};