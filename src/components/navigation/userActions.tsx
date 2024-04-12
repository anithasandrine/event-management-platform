import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faEye,
  faSignOut,
  faDashboard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { TextSlice } from "../../utils/textlength";
import { useState } from "react";
import { Logout } from "../../containers/Auth/Actions";
import { isSupperUser } from "../../utils/isSupperUser";
import { getLoggedInuser } from "../../utils/LoggedinUser";
import { CAREER, OFFICE, STUDENT, SUPPER_ADMIN } from "../../utils/roles";

export const UserActions = ({ Handle_click }: { Handle_click: () => void }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState<boolean>(true);
  function Handle_ToggleMene() {
    setMenu(!menu);
  }
  function Handle_navigating(path: string) {
    Handle_click();
    navigate(path);
    Handle_ToggleMene();
  }
  const user = getLoggedInuser();

  const UserRole =
    "role" in user && typeof user.role === "string" ? user.role : "";

  const UserId = "id" in user && typeof user.id === "string" ? user.id : "";

  const UserName =
    "name" in user && typeof user.name === "string" ? user.name : "";
  const UserProfilePic =
    "profilePicture" in user && typeof user.profilePicture === "string"
      ? user.profilePicture
      : "";

  const SupperUser = isSupperUser(UserRole);

  return (
    <div className="relative inline-block text-left">
      <div onClick={Handle_ToggleMene}>
        <button
          type="button"
          className={`hidden   md:inline-flex justify-center items-center w-8 h-8 lg:w-12 lg:h-12 rounded-full hover:bg-blueWhite textPrimary_y  border border-[#9E9051] focus:outline-none `}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {UserProfilePic === "" ? (
            <FontAwesomeIcon icon={faUser} className="text-xl lg:text-3xl" />
          ) : (
            <img src={UserProfilePic} alt="profile" />
          )}
        </button>
      </div>
      <div
        className={`md:origin-top-right md:absolute md:right-0 md:mt-2 md:w-40 md:rounded-md md:shadow-lg bg-white ring-0 md:ring-black ring-opacity-5 focus:outline-none z-20 ${
          menu ? " md:hidden" : ""
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-4" role="none">
          <h1 className="hidden md:block text-blue text-sm px-4 pb-2">
            {TextSlice(UserName, 13)}
          </h1>
          {/* Option 1: View Profiles */}
          <button
            onClick={() => {
              UserRole === STUDENT &&
                Handle_navigating(`student/profile/${UserId}`);
              UserRole === OFFICE &&
                Handle_navigating(`office/profile/${UserId}`);
              UserRole === CAREER &&
                Handle_navigating(`/office/profile/${UserId}`);
              UserRole === SUPPER_ADMIN &&
                Handle_navigating(`/office/profile/${UserId}`);
            }}
            className="w-full flex items-center px-4 py-2 text-sm text-blue hover:bg-gray-100 hover:text-black"
          >
            <FontAwesomeIcon icon={faEye} className="mr-2 hover:text-blue" />
            View Profiles
          </button>

          {/* Option 2: SupperUsers dashboard */}
          {SupperUser && (
            <button
              className={`w-full flex items-center px-4 py-2 text-sm text-blue hover:bg-gray-100 hover:text-black ${
                SupperUser ? "" : "hidden"
              }`}
              onClick={() => {
                UserRole === OFFICE && Handle_navigating("/office");
                UserRole === CAREER && Handle_navigating("/career");
                UserRole === SUPPER_ADMIN && Handle_navigating("/admin");
              }}
            >
              <FontAwesomeIcon icon={faDashboard} className="mr-2" />
              Dashboard
            </button>
          )}
          {/* Option 3: Loagout */}
          <button
            className="w-full flex items-center px-4 py-2 text-sm text-blue hover:bg-gray-100 hover:text-black"
            onClick={() => {
              Handle_navigating("/");
              Logout();
            }}
          >
            <FontAwesomeIcon icon={faSignOut} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
