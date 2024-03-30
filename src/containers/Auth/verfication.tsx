import { ContentLayout } from "../../components/contentLayout";
import { PhoneVerificationForm } from "../../components/form/verficationForm";
import { PageLayout } from "../../components/pageLayout";

export const Velification = () => {
  return (
    <>
      <PageLayout>
        <ContentLayout>
          <div className=" mx-8 flex flex-col items-center">
            <h1 className=" text-blue font-bold text-3xl italic ">
              Phone verification
            </h1>
            <PhoneVerificationForm />
          </div>
        </ContentLayout>
      </PageLayout>
    </>
  );
};
