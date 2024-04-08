import { getLoggedInuser } from "../utils/LoggedinUser";
const API_URL = `${import.meta.env.VITE_API_URL}`;

export const studentSignUP = async (user: StudentSignupATributes) => {
  const data = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const studentUpdatePicture = async (picUlr: FileList) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";

  const formData = new FormData();
  const filesArray = [];
  filesArray.push(picUlr[0]);
  for (let index = 0; index < filesArray.length; index++) {
    const element = filesArray[index];
    formData.append("profilePicture", element);
  }
  const data = await fetch(`${API_URL}/student/profile_pic`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    body: formData,
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const getStudentById = async (id: string) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const result = await fetch(`${API_URL}/student/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
  if (!result.ok) throw await result.json();
  return (await result.json()).student as StudentAtribute;
};

export const studentUpdateInfo = async (updates: UpdateStudentAttributes) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/student`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(updates),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const comfirmUpdateInfo = async (token: ConfirmStudentAttributes) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/student/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(token),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const updatePassword = async (token: UpdatePasswordAttributes) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/student/password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(token),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};
