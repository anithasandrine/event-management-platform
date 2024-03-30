import { ContentLayout } from "../../components/contentLayout";
import { ResetPasswordForm } from "../../components/form/resetPasswordFrom";
import { PageLayout } from "../../components/pageLayout";

export const ResetPassword = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <div className=" mx-8 flex flex-col items-center">
          <h1 className=" text-blue font-bold text-3xl italic ">
            Reset password
          </h1>
          <ResetPasswordForm />
        </div>
      </ContentLayout>
    </PageLayout>
  );
};
