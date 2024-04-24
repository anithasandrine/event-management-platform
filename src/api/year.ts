import { getLoggedInuser } from "../utils/LoggedinUser";
const API_URL = `${import.meta.env.VITE_API_URL}`;

export const getAllYearOfStudies = async () => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/year/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });

  if (!data.ok) throw await data.json();
  return (await data.json()).message;
};
