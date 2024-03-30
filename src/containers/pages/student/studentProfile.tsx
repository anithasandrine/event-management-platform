import "tippy.js/dist/tippy.css";
import { PageLayout } from "../../../components/pageLayout";
import { ProfilePicture } from "../../../components/ProfilePicutre";
import { ProfileActions } from "../../../components/profileActions";
import { Student } from "./Actions";
import { ProfileScreton } from "../../../components/Skleton/ProfileScleton";
import toast from "react-hot-toast";
import { getLoggedInuser } from "../../../utils/LoggedinUser";
import { useNavigate } from "react-router-dom";

export const StudentProfile = () => {
  const loggedin = getLoggedInuser();
  const id = "id" in loggedin ? loggedin.id : "";
  const { pendingStudent, error, student } = Student(id ?? "");
  const navigate = useNavigate();

  if (error) {
    const er = "originalError" in error ? (error.originalError as string) : "";
    toast.error(er);
    navigate("/error");
  }
  return (
    <PageLayout>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-24">
        {(pendingStudent && <ProfileScreton />) ||
          (student && (
            <>
              <ProfilePicture student={student} />
              <ProfileActions student={student} />
            </>
          ))}
      </div>
    </PageLayout>
  );
};
