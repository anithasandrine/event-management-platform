import { ReactElement } from "react";

export const FormError = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <p className=" text-red-600 mb-2  lg:text-xl block font-semibold">
        {children}
      </p>
    </>
  );
};
