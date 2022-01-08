import { VFC } from "react";
import { Outlet } from "remix";
import Sidebar from "~/components/general/admin/sidebar";

const ScholeIndex: VFC = () => {
  return (
    <div className="admin--view">
      <Sidebar />
      <div className="admin--main--contents">
        <Outlet />
      </div>
    </div>
  );
};

export default ScholeIndex;
