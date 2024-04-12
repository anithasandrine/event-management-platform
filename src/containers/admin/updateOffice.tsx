import { UpdateOfficeProfile as Office } from "../../components/form/office/updateOffice";
import { PageLayout } from "../../components/pageLayout";

export const UpdateOfficeProfile = () => {
  return (
    <PageLayout>
      <div className=" mx-8 my-8 flex flex-col items-center">
        <h1 className=" text-blue font-bold text-3xl italic ">
          Update Profile
        </h1>
        <Office />
      </div>
    </PageLayout>
  );
};
