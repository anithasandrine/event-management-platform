import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEnvelope,
  faKey,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { PageLayout } from "../../../components/pageLayout";

export default function CareerProfile() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-24">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faUser}
            className="text-4xl text-primary mr-2"
          />
          <h2 className="text-2xl font-semibold text-primary">{`${"carrer"} ${"guidance"}`}</h2>
        </div>

        <div className="mt-4">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-primary mr-2" />
            <span className="text-gray-600">{"office name"}</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2" />
            <span className="text-gray-600">{"office email"}</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="bg-blue hover:bgSecondary text-white py-2 px-4 rounded hover:bg-secondary mr-2 mb-4"
            onClick={() => navigate("/career/update")}
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Update Profile
          </button>
          <button
            type="button"
            className="bg-blue hover:bgSecondary text-white py-2 px-4 rounded hover:bg-secondary"
            onClick={() => navigate("/career/password")}
          >
            <FontAwesomeIcon icon={faKey} className="mr-2" />
            Change Password
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
