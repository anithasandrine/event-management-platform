import {
  faEdit,
  faEnvelope,
  faKey,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { TextSlice } from "../utils/textlength";

export const ProfileActions = ({ student }: { student: StudentAtribute }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="text-primary mr-2" />
          <span className="text-gray-600">
            {TextSlice(student.updatedEmail, 24)}
          </span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2" />
          <span className="text-gray-600">{student.regNo}</span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2" />
          <span className="text-gray-600">{student.YearOfStudy.name}</span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2" />
          <span className="text-gray-600">{student.updatedPhone}</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          className="bg-blue hover:bgSecondary text-white py-2 px-4 rounded hover:bg-secondary mr-2 mb-4"
          onClick={() => navigate("/student/update")}
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Update Profile
        </button>
        <button
          type="button"
          className="bg-blue hover:bgSecondary text-white py-2 px-4 rounded hover:bg-secondary"
          onClick={() => navigate("/student/password")}
        >
          <FontAwesomeIcon icon={faKey} className="mr-2" />
          Change Password
        </button>
      </div>
    </>
  );
};
