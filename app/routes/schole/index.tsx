import { VFC } from "react";
import Header from "../../components/general/header";
import { Outlet } from "remix";
const Index: VFC = () => {
  return (
    <div>
      <h1>Schole Top</h1>
      {/* <div
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      ></div> */}
    </div>
  );
};

export default Index;
