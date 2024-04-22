import { ContentLayout } from "../../../components/contentLayout";
import { PageLayout } from "../../../components/pageLayout";
import { AdminSearchStudentById } from "../../../components/adminSearchStudent";
import { useState } from "react";
import { EditStudent } from "../../../components/form/office/editStudent";

export const ManageStudent = () => {
  const [student, setStudent] = useState<StudentAtribute>();
  const [isEditModelOpent, setIsEditModelOpen] = useState<boolean>(false);
  function Handle_student(student: StudentAtribute) {
    setStudent(student);
  }
  function Handle_openModel() {
    setIsEditModelOpen(!isEditModelOpent);
  }
  // UpdateStudentAttributes
  console.log("///", student);
  return (
    <PageLayout>
      <ContentLayout>
        <>
          <h1 className=" text-lg font-semibold bg-blue text-white px-4 text-center w-fit mx-auto">
            Updata Student information
          </h1>
          <div className=" w-full h-full min-h-fit relative">
            <AdminSearchStudentById
              Handle_student={Handle_student}
              Handle_openModel={Handle_openModel}
            />
          </div>
          {student !== undefined && isEditModelOpent && (
            <EditStudent
              student={student}
              Handle_openModel={Handle_openModel}
            />
          )}
        </>
      </ContentLayout>
    </PageLayout>
  );
};
