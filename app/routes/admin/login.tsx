import { VFC } from "react";
import LinkArea from "../../components/individual/admin/login/linkArea";
import { Form } from "remix";
const Login: VFC = () => {
  return (
    <div>
      <h1>Login</h1>
      <LinkArea />

      <Form method="post">
        <div>
          <label htmlFor="email">
            <span>Email</span>
          </label>
          <input
            type="text"
            id="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
          />
        </div>
        <div>
          <label htmlFor="password">
            <span>password</span>
          </label>
          <input
            type="password"
            id="password"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
          />
        </div>
        <input type="submit" value="login" />
      </Form>
    </div>
  );
};

export default Login;
