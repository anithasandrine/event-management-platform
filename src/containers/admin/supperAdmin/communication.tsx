import { ContentLayout } from "../../../components/contentLayout";
import { CommunicationMessage } from "../../../components/form/office/comunications";
import { PageLayout } from "../../../components/pageLayout";

export const ManageCommunication = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <>
          <h1 className=" text-xl font-bold italic text-blue flex items-center justify-center">
            Communicate Student
          </h1>
          <CommunicationMessage />
        </>
      </ContentLayout>
    </PageLayout>
  );
};
