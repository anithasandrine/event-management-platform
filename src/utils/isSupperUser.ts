import { CAREER, OFFICE, SUPPER_ADMIN } from "./roles";

export const isSupperUser = (userRole: string) => {
  return [SUPPER_ADMIN, CAREER, OFFICE].includes(userRole);
};
