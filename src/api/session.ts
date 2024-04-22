import { getLoggedInuser } from "../utils/LoggedinUser";
const API_URL = `${import.meta.env.VITE_API_URL}`;

export const createSession = async (bookingReason: string) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/session/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(bookingReason),
  });

  if (!data.ok) throw await data.json();
  return await data.json();
};

export const repalySession = async (id: string, replay: string) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/session/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(replay),
  });

  if (!data.ok) throw await data.json();
  return await data.json();
};

export const getAllSessions = async () => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/session/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });

  if (!data.ok) throw await data.json();
  return (await data.json()).message;
};
