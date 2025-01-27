import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {Flex,} from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem
} from "@/components/ui/menu"
import {LanguagesIcon, LogOutIcon, MoonIcon, SettingsIcon, SunIcon, UserPlusIcon} from "lucide-react";
import Profile from "./Profile";

const ProfileMenu = () => {
  const gap = 3;
  const subMenuPosition = {placement: "right-start", gutter: 2};

  const [lang, setValueLang] = useState("en")
  const [mounted, setMounted] = useState(false)

  // can this be "let"?
  let {theme, setTheme} = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  // to prevent hydration warning
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const setLight = () => {
    setTheme(theme = "light")
  }
  const setDark = () => {
    setTheme(theme = "dark")
  }

  return (
      <MenuRoot>
        <MenuTrigger asChild>
          <Profile/>
        </MenuTrigger>

        <MenuContent minWidth="12rem">
          <MenuItemGroup title="Profile">

            <MenuRoot closeOnSelect={false} positioning={subMenuPosition}>
              <MenuTriggerItem value="theme" gap={gap}>
                {theme === "light" ? <SunIcon size={16}/> : <MoonIcon size={16}/>}
                <Flex flexGrow={1}>Theme</Flex>
              </MenuTriggerItem>
              <MenuContent>
                <MenuRadioItemGroup
                    value={theme}
                    onValueChange={(e) => setValueLang(e.value)}
                >
                  <MenuRadioItem value="light" onClick={setLight}>Light</MenuRadioItem>
                  <MenuRadioItem value="dark" onClick={setDark}>Dark</MenuRadioItem>
                </MenuRadioItemGroup>
              </MenuContent>
            </MenuRoot>

            <MenuRoot closeOnSelect={false} positioning={subMenuPosition}>
              <MenuTriggerItem value="language" gap={gap}>
                <LanguagesIcon size={16}/><Flex flexGrow={1}>Language</Flex>
              </MenuTriggerItem>
              <MenuContent>
                <MenuRadioItemGroup
                    value={lang}
                    onValueChange={(e) => setValueLang(e.value)}
                >
                  <MenuRadioItem value="en">English</MenuRadioItem>
                  <MenuRadioItem value="ru">Russian</MenuRadioItem>
                </MenuRadioItemGroup>
              </MenuContent>
            </MenuRoot>

            <MenuItem value="settings" gap={gap}><SettingsIcon size={16}/>Settings</MenuItem>

          </MenuItemGroup>

          <MenuSeparator/>
          <MenuItem value="org" gap={gap}><UserPlusIcon size={16}/>Organization</MenuItem>
          <MenuSeparator/>
          <MenuItem value="logout" gap={gap}><LogOutIcon size={16}/>Log out</MenuItem>

        </MenuContent>
      </MenuRoot>
  );
};

export default ProfileMenu;