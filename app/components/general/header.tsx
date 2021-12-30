import { VFC } from "react";

const Header: VFC = () => {
  return (
    <div className="header">
      <div className="header--contents--left">
        <div className="header--contents__item">Schole</div>
      </div>
      <div className="header--contents--right">
        <div className="header--contents__item">about us</div>
        <div className="header--contents__item">contents</div>
        <div className="header--contents__item">member</div>
      </div>
    </div>
  );
};
export default Header;
