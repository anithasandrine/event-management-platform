import { ContentLayout } from "../../components/contentLayout";
import { ForgetPasswordForm } from "../../components/form/ForgetPassword";
import { PageLayout } from "../../components/pageLayout";

export const ForgetPassword = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <div className=" mx-8 flex flex-col items-center">
          <h1 className=" text-blue font-bold text-3xl italic ">
            Forget password
          </h1>
          <ForgetPasswordForm />
        </div>
      </ContentLayout>
    </PageLayout>
  );
};
