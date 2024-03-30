import { ContentLayout } from "../../components/contentLayout";
import { LoginForm } from "../../components/form/loginForm";
import { PageLayout } from "../../components/pageLayout";

export const Login = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <div className=" mx-8 flex flex-col items-center">
          <h1 className=" text-blue font-bold text-3xl italic ">login page</h1>
          <LoginForm />
        </div>
      </ContentLayout>
    </PageLayout>
  );
};
