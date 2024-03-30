import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLoggedInuser } from "../../utils/LoggedinUser";
import { CAREER, OFFICE, STUDENT, SUPPER_ADMIN } from "../../utils/roles";
import { LinkFormat, LinkFormatPhone } from "./linkFormat";
import { UserActions } from "./userActions";

export const NavigationLinks = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const history = useLocation();
  useEffect(() => {}, [history]);
  function Handle_ToggleMene() {
    setMenu(!menu);
  }

  const user = getLoggedInuser();
  const isLoggedIn: boolean = [SUPPER_ADMIN, OFFICE, CAREER, STUDENT].includes(
    "role" in user && typeof user.role === "string" ? user.role : ""
  );
  return (
    <ul className={`text-white flex gap-8 right-4 w-full`}>
      <LinkFormat url="/" name="Home" />
      <LinkFormat url="/career_guidance" name="Career" />
      <LinkFormat url="https://ur.ac.rw" name="UR website" target="blank" />
      {!isLoggedIn && <LinkFormat url="/login" name="Login" />}
      {isLoggedIn && <UserActions Handle_click={Handle_ToggleMene} />}
    </ul>
  );
};

export const NavigationLinksPhone = ({
  isMenuOpen,
  Handle_click,
}: {
  isMenuOpen: boolean;
  Handle_click: () => void;
}) => {
  const user = getLoggedInuser();
  const isLoggedIn: boolean = [SUPPER_ADMIN, OFFICE, CAREER, STUDENT].includes(
    "role" in user && typeof user.role === "string" ? user.role : ""
  );
  return (
    <div
      className={`${
        isMenuOpen ? "" : "hidden"
      } z-50  text-blue bg-white shadow-xl  flex flex-col absolute  top-[10vh] font-semibold  w-[15rem] gap-1 md:gap-8 right-4 px-8 py-4 rounded-lg  `}
    >
      <LinkFormatPhone Handle_click={Handle_click} url="/" name="Home" />
      <LinkFormatPhone
        Handle_click={Handle_click}
        url="/career_guidance"
        name="Career"
      />
      <LinkFormatPhone
        Handle_click={Handle_click}
        url="https://ur.ac.rw"
        name="UR website"
        target="blank"
      />
      {!isLoggedIn && (
        <LinkFormatPhone
          Handle_click={Handle_click}
          url="/login"
          name="Login"
        />
      )}
      {isLoggedIn && <UserActions Handle_click={Handle_click} />}
    </div>
  );
};
