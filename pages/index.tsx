import { Button, Center, HStack } from "@chakra-ui/react"
import {ColorModeToggle} from "@/components/color-mode-toggle";
import { AppLayout } from "@/components/layout/AppLayout";
import Link from "next/link";

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
