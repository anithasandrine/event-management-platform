import { ContentLayout } from "../../../components/contentLayout";
import { UpdateOfficeForm } from "../../../components/form/updateOffice";
import { PageLayout } from "../../../components/pageLayout";

export const UpdateGuidance = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <div className=" mx-8 flex flex-col items-center">
          <h1 className=" text-blue font-bold text-3xl italic ">
            update guidance profile
          </h1>
          <UpdateOfficeForm />
        </div>
      </ContentLayout>
    </PageLayout>
  );
};
