import {useState} from "react";
import {Flex, Text, Tabs} from "@chakra-ui/react";
import {MenuContent, MenuRadioItem, MenuRadioItemGroup, MenuRoot, MenuTrigger} from "@/components/ui/menu";
import {Button} from "@/components/ui/button";
import {ArrowDownWideNarrowIcon, ChevronDownIcon, FilePlus2Icon, PlusIcon} from "lucide-react";

import {Header, HeaderNav, HeaderTitle} from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import Body from "@/components/layout/Body";
import Content from "@/components/layout/Content";
import ContentList from "@/components/layout/ContentList";

import MainMenu from "@/features/MainMenu";
import MyTestsItem from "@/features/MyTestsItem";

export default function Page() {

  const [activeTab, setActiveTab] = useState<string | null>("all")
  const [sort, setValue] = useState("edit")

  return (
      <Flex>
        <SideBar>
          <MainMenu/>
        </SideBar>
        <Body>
          <Header>
            <HeaderTitle title="My tests">
              <Button colorPalette={"purple"} variant={"outline"}>Import file<FilePlus2Icon/></Button>
              <Button colorPalette={"purple"}>Create test<PlusIcon/></Button>
            </HeaderTitle>
            <HeaderNav>
              <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
                <Tabs.List border={0}>
                  <Tabs.Trigger value="all">All</Tabs.Trigger>
                  <Tabs.Trigger value="pusblished">Published</Tabs.Trigger>
                  <Tabs.Trigger value="draft">Drafts</Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
              <MenuRoot>
                <MenuTrigger asChild>
                  <Flex alignItems="center" gap={2} fontSize="sm" paddingRight={4} color="fg.muted">
                    <ArrowDownWideNarrowIcon size={16}/>By date edit<ChevronDownIcon size={16}/>
                  </Flex>
                </MenuTrigger>
                <MenuContent>
                  <MenuRadioItemGroup
                      value={sort}
                      onValueChange={(e) => setValue(e.value)}
                  >
                    <MenuRadioItem value="edit">By date edit</MenuRadioItem>
                    <MenuRadioItem value="created">By date created</MenuRadioItem>
                  </MenuRadioItemGroup>
                </MenuContent>
              </MenuRoot>
            </HeaderNav>
          </Header>
          <Content>
            <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
              <Tabs.Content value="all">
                <ContentList>
                  <MyTestsItem
                      title="Explaining Testsplatform with fruits"
                      questions={7}
                      results={2}
                  />
                  <MyTestsItem
                      title="Frontend Developer"
                      questions={18}
                      results={12}
                      edited="3 hours ago"
                      published
                  />
                  <MyTestsItem
                      title="Product Designer"
                      questions={1}
                      results={12}
                      edited="3 week ago"
                  />
                  <MyTestsItem
                      title="UX Designer"
                      questions={18}
                      results={20}
                      published
                  />
                  <MyTestsItem
                      title="Frontend Developer"
                      questions={26}
                      results={34}
                      edited="June 12, 2022"
                      published
                  />
                  <MyTestsItem
                      title="Explaining Testsplatform with fruits"
                      questions={7}
                      results={2}
                  />
                  <MyTestsItem
                      title="Frontend Developer"
                      questions={18}
                      results={12}
                      edited="3 hours ago"
                      published
                  />
                  <MyTestsItem
                      title="Product Designer"
                      questions={1}
                      results={12}
                      edited="3 week ago"
                  />
                </ContentList>
              </Tabs.Content>
              <Tabs.Content value="pusblished">Published</Tabs.Content>
              <Tabs.Content value="draft">Drafts</Tabs.Content>
            </Tabs.Root>
          </Content>
        </Body>
      </Flex>
  )
}

