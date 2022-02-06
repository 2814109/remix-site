import type { LoaderFunction } from "remix";
import { Outlet } from "remix";
import { authenticator, User } from "~/utils/auth.server";
import { useLoaderData } from "remix";
import { useEffect } from "react";
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });
  user
    ? (window.location.href = "/admin/dashboard")
    : (window.location.href = "/admin/login");
};
