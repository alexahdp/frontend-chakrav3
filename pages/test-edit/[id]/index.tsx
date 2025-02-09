import {AppLayout} from "@/components/layout/AppLayout";
import {SideBar} from "@/components/layout/SideBar";
import {Header, HeaderTitle} from "@/components/layout/Header";

import {Body} from "@/components/layout/Body";
import {MainMenu} from "@/features/MainMenu";

export default function Page() {

  return (
      <AppLayout>
        <SideBar>
          <MainMenu/>
        </SideBar>
        <Body>
          <Header>
            <HeaderTitle title="My tests">

            </HeaderTitle>
          </Header>

        </Body>
      </AppLayout>
  )
}

