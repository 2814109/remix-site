import { VFC } from "react";
import { Link } from "remix";
const Header: VFC = () => {
  return (
    <div className="header">
      <div className="header--contents--left">
        <div className="header--contents__item">
          <Link className="header--contents__item" to="/schole">
            Schole
          </Link>
        </div>
      </div>
      <div className="header--contents--right">
        <Link className="header--contents__item" to="about_us">
          about us
        </Link>
        <Link className="header--contents__item" to="contents">
          contents
        </Link>
        <Link className="header--contents__item" to="member">
          member
        </Link>
      </div>
    </div>
  );
};
export default Header;
