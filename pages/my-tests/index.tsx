import {useState} from "react";
import Head from 'next/head'
import {Flex, Heading, Icon, IconButton, Tabs} from "@chakra-ui/react";
import {MenuContent, MenuRadioItem, MenuRadioItemGroup, MenuRoot, MenuTrigger} from "@/components/ui/menu";
import {Button} from "@/components/ui/button";
import {ArrowDownWideNarrowIcon, ChevronDownIcon, FilePlus2Icon, MenuIcon, PlusIcon} from "lucide-react";

import {AppLayout} from "@/components/layout/AppLayout";
import {SideBar} from "@/components/layout/SideBar";
import {Header, HeaderNav, HeaderTitle} from "@/components/layout/Header";
import {Body} from "@/components/layout/Body";
import {Content} from "@/components/layout/Content";
import {ContentList} from "@/components/layout/ContentList";

import {MainMenu} from "@/features/MainMenu";
import {MyTestsItem} from "@/features/MyTestsItem";
import {useMenuContext} from "@/components/providers/menuProvider";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string | null>("all")
  const [sort, setValue] = useState("edit")
  const {isOpen, setIsOpen} = useMenuContext();

  return (
      <>
        <Head>
          <title>My tests</title>
        </Head>
        <AppLayout>
          <SideBar>
            <MainMenu/>
          </SideBar>
          <Body>
            <Header>

              <HeaderTitle>
                <IconButton hideFrom="md" variant="ghost" size="xs" onClick={() => setIsOpen(!isOpen)}>
                  <Icon width={"20px"} height={"20px"} asChild><MenuIcon/></Icon>
                </IconButton>
                <Heading>My tests</Heading>
                <Button hideBelow={"md"} colorPalette={"purple"} variant={"surface"}>
                  Import file<FilePlus2Icon/>
                </Button>
                <Button hideBelow={"md"} colorPalette={"purple"}>
                  Create test<PlusIcon/>
                </Button>
                <IconButton hideFrom={"md"} colorPalette={"purple"} size="xs" variant={"outline"}>
                  <Icon width={"20px"} height={"20px"} asChild><FilePlus2Icon/></Icon>
                </IconButton>
                <IconButton hideFrom={"md"} colorPalette={"purple"} size="xs">
                  <Icon width={"20px"} height={"20px"} asChild><PlusIcon size={20}/></Icon>
                </IconButton>
              </HeaderTitle>

              <HeaderNav>

                {/* TabsPanel */}
                <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
                  <Tabs.List border={0}>
                    <Tabs.Trigger value="all">All</Tabs.Trigger>
                    <Tabs.Trigger value="pusblished">Published</Tabs.Trigger>
                    <Tabs.Trigger value="draft">Drafts</Tabs.Trigger>
                  </Tabs.List>
                </Tabs.Root>

                {/* SortingBy */}
                <MenuRoot>
                  <MenuTrigger asChild>
                    <Flex alignItems="center" gap={2} fontSize="sm" paddingRight={4} color="fg">
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
        </AppLayout>
      </>
  )
}

