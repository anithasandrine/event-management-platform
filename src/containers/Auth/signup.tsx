import { ContentLayout } from "../../components/contentLayout";
import { SignupForm } from "../../components/form/signupForm";
import { PageLayout } from "../../components/pageLayout";

export const Signup = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <div className=" flex flex-col items-center px-4">
          <h1 className=" text-blue font-bold text-3xl italic ">Sign up</h1>
          <SignupForm />
        </div>
      </ContentLayout>
    </PageLayout>
  );
};
