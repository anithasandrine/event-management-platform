import { ReactElement } from "react";

export const PageLayout = ({ children }: { children: ReactElement }) => {
  return <div className=" min-h-[80vh]">{children}</div>;
};
