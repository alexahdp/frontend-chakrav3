import { Button, Center, HStack, Flex } from "@chakra-ui/react"
import {ColorModeToggle} from "@/components/color-mode-toggle";
import AppLayout from "@/components/layout/AppLayout";
import NavItem from "@/components/ui/nav-item";
import Link from "next/link";
import {FilePenLineIcon} from "lucide-react";

export default function Page() {
  return (
      <AppLayout>
          <Center flexDirection="column" gap="8" minHeight="dvh" flexGrow="1">
              <HStack>
                <Button asChild>
                  <Link href="/my-tests">Login</Link>
                </Button>
                <HStack>
                  <ColorModeToggle/>
                </HStack>
              </HStack>
          </Center>
      </AppLayout>
  )
}
