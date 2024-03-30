import { ReactElement } from "react";

export const ContentLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="my-4 md:my-6  mx-4 md:mx-6 lg:mx-8 xl:mx-10">
      {children}
    </div>
  );
};
