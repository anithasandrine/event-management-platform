import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getLoggedInuser } from "../utils/LoggedinUser";

export const RequiredAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const location = useLocation();
  const user = getLoggedInuser();
  if (!("role" in user)) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  } else if (user.role && allowedRoles.includes(user.role)) {
    return <Outlet />;
  } else {
    return <Navigate to={"/unouthorized"} replace />;
  }
};
