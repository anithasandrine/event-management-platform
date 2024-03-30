import { ConfirmUpdates } from "../../../components/form/student/confirmUpdate";
import { PageLayout } from "../../../components/pageLayout";

export const ConfirmProfileUpdale = () => {
  return (
    <PageLayout>
      <div className=" mx-8 my-8 flex flex-col items-center">
        <h1 className=" text-blue font-bold text-3xl italic ">
          Verfication token
        </h1>
        <ConfirmUpdates />
      </div>
    </PageLayout>
  );
};
