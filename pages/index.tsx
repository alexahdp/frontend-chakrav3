import { Button, Center, HStack, Flex } from "@chakra-ui/react"
import {ColorModeToggle} from "@/components/color-mode-toggle";
import Sidebar from "../features/MainMenu";

export default function Page() {
  return (
      <Flex>
          <Sidebar/>
          <Center flexDir="column" gap="8" minH="dvh" flexGrow="1">
              <HStack>
                  <ColorModeToggle/>
              </HStack>
              <HStack>
                  <Button>Click me</Button>
                  <Button>Click me</Button>
              </HStack>
          </Center>
      </Flex>
  )
}
