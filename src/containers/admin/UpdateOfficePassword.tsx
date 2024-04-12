import { ChangeOfficePassword } from "../../components/form/office/updateOfficeePassword";
import { PageLayout } from "../../components/pageLayout";

export const UpdateOfficePassword = () => {
  return (
    <PageLayout>
      <div className=" mx-8 my-8 flex flex-col items-center">
        <h1 className=" text-blue font-bold text-3xl italic ">
          Update password
        </h1>
        <ChangeOfficePassword />
      </div>
    </PageLayout>
  );
};
