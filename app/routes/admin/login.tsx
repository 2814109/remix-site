import { VFC } from "react";
import LinkArea from "../../components/individual/admin/login/linkArea";
import LoginForm from "../../components/individual/admin/login/loginForm";
const Login: VFC = () => {
  return (
    <div className="login--form__wrap">
      <div className="login--form">
        <h1>Login</h1>
        <LinkArea />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
