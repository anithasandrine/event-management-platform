// /student/:id
const API_URL = `${import.meta.env.VITE_API_URL}`;

import { getLoggedInuser } from "../utils/LoggedinUser";

export const updateStudentCredentials = async (
  id: string,
  student: UpdateStudentAttributes
) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/supper/student/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(student),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};
