import { VFC } from "react";
import { Link } from "remix";

const LinkArea: VFC = () => {
  return (
    <>
      <div className="login--form--area__link">
        <p>Don't have an account?</p>
        <Link to="registration">registration</Link>
      </div>
      <div className="login--form--area__link">
        <p>Forgot your password?</p>
        <Link to="reset_password">reset password</Link>
      </div>
    </>
  );
};
export default LinkArea;
