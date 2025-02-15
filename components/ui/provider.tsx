// this component was customized

"use client"

import {ChakraProvider} from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { system } from "@/components/theme";
import { MenuProvider } from "../providers/menuProvider";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <MenuProvider>
        <ColorModeProvider {...props} />
      </MenuProvider>
    </ChakraProvider>
  )
}
