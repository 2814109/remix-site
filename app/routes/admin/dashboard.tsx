import { VFC } from "react";
import { Outlet } from "remix";
import Sidebar from "~/components/general/admin/sidebar";
import type { LoaderFunction } from "remix";
import { authenticator, User } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });
  return { user };
};

const Template: VFC = () => {
  return (
    <div className="admin--view">
      <Sidebar />
      <div className="admin--main--contents">
        <Outlet />
      </div>
    </div>
  );
};

export default Template;
