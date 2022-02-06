import type { LoaderFunction } from "remix";
import { Outlet } from "remix";
import { authenticator, User } from "~/utils/auth.server";
import { useLoaderData } from "remix";
import { useEffect } from "react";
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });
  return { user };
};

export default function Index() {
  const data = useLoaderData<{ user: User }>();
  useEffect(() => {
    if (data.user) {
      window.location.href = "/admin/dashboard";
    }
  }, []);
  return null;
}
