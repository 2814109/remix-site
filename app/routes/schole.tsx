import { VFC } from "react";
import { Outlet } from "remix";
import Header from "~/components/general/header";
import Content from "../components/general/content";

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
