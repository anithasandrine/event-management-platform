import { PageLayout } from "../../../components/pageLayout";
import { ChangePassword as Change } from "../../../components/form/student/changePassword";
export const ChangePassword = () => {
  return (
    <PageLayout>
      <div className=" mx-8 my-8 flex flex-col items-center">
        <h1 className=" text-blue font-bold text-3xl italic ">
          Chane password
        </h1>
        <Change />
      </div>
    </PageLayout>
  );
};
