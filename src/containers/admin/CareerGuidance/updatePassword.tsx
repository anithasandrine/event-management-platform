import { ContentLayout } from "../../../components/contentLayout";
import { UpdateOfficePasswordForm } from "../../../components/form/updatePassword";
import { PageLayout } from "../../../components/pageLayout";

export const UpdateGuidancePassword = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <div className=" mx-8 flex flex-col items-center">
          <h1 className=" text-blue font-bold text-3xl italic ">
            update guidance password
          </h1>
          <UpdateOfficePasswordForm />
        </div>
      </ContentLayout>
    </PageLayout>
  );
};
