import { VFC } from "react";
const Login: VFC = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          <span>Email</span>
        </label>
        <input type="text" id="email"></input>
      </form>
    </div>
  );
};

export default Login;
