import { VFC } from "react";
import { Outlet } from "remix";
import Header from "~/components/general/user/header";
import Content from "../components/general/user/content";

const ScholeIndex: VFC = () => {
  return (
    <div>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default ScholeIndex;
