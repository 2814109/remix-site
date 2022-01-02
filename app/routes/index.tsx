import { VFC, useEffect } from "react";

const Index: VFC = () => {
  useEffect(() => {
    window.location.href = "/schole";
  }, []);

  return null;
};
export default Index;
