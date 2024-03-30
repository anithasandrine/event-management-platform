import { UpdateStudent } from "../../../components/form/student/updateProfile";
import { PageLayout } from "../../../components/pageLayout";

export const UpdateStudentProfile = () => {
  return (
    <PageLayout>
      <div className=" mx-8 my-8 flex flex-col items-center">
        <h1 className=" text-blue font-bold text-3xl italic ">
          Update student
        </h1>
        <UpdateStudent />
      </div>
    </PageLayout>
  );
};
