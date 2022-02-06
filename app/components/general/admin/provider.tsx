import { VFC, ReactNode } from "react";
import type { LoaderFunction } from "remix";
import redirect from "remix"
import { authenticator, User } from "~/utils/auth.server";
import { useLoaderData } from "remix";

interface Props {
  children: ReactNode;
}

const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });
  return { user };
};
const Provider: VFC<Props> = ({ children }) => {
    const data = useLoaderData<{ user: User }>();
    return(
        <>{data.user ? {children}: redirect("admin/login")}
        </>)
};
