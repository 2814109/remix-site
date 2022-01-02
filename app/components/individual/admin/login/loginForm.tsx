import { VFC } from "react";
import { Form } from "remix";

const LoginForm: VFC = () => {
  return (
    <Form method="post">
      <div className="login--form__section">
        <label htmlFor="email">
          <span className="login--form__field_label">Email</span>
        </label>
        <input
          className="login--form__input"
          type="text"
          id="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
        />
      </div>
      <div className="login--form__section">
        <label htmlFor="password">
          <span className="login--form__field_label">password</span>
        </label>
        <input
          className="login--form__input"
          type="password"
          id="password"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
        />
      </div>
      <div className="login--form__wrap__primary_button">
        <input
          className="login--form__primary_button"
          type="submit"
          value="login"
        />
      </div>
    </Form>
  );
};

export default LoginForm;
