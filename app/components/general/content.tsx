import { VFC, ReactNode } from "react";
type ContentType = {
  children: ReactNode;
};
const Content: VFC<ContentType> = ({ children }) => {
  return <div className="main--content">{children}</div>;
};

export default Content;
