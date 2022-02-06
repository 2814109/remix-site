import { VFC } from "react";

const Login: VFC = () => {
  return (
    <form action="auth0" method="post">
      <button>Login with Auth0</button>
    </form>
  );
};
export default Login;
