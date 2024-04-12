import "tippy.js/dist/tippy.css";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getLoggedInuser } from "../../utils/LoggedinUser";
import { PageLayout } from "../../components/pageLayout";
import { ProfileScreton } from "../../components/Skleton/ProfileScleton";
import { Office } from "./supperAdmin/Actions";
import { ProfilePictureOffice } from "../../components/ProfilePicutreOffice";
import { ProfileActionsOffice } from "../../components/profileActionsOffice";

export const OfficeProfile = () => {
  const loggedin = getLoggedInuser();
  const id = "id" in loggedin ? loggedin.id : "";
  const { isPending, error, office } = Office(id ?? "");
  const navigate = useNavigate();

  if (error) {
    const er = "originalError" in error ? (error.originalError as string) : "";
    toast.error(er);
    navigate("/error");
  }
  if (office) {
    console.log("//////we got it", office);
  }
  return (
    <PageLayout>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-24">
        {(isPending && <ProfileScreton />) ||
          (office && (
            <>
              <ProfilePictureOffice office={office} />
              <ProfileActionsOffice office={office} />
            </>
          ))}
      </div>
    </PageLayout>
  );
};
