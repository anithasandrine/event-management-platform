import { getLoggedInuser } from "../utils/LoggedinUser";
const API_URL = `${import.meta.env.VITE_API_URL}`;

export const createOffice = async (office: CreateOfficeAttributes) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/auth/office`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(office),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const findAllOffices = async () => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/office`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const deleteOffice = async (id: string) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/office/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const findAllOfficById = async (id: string) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/office/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  if (!data.ok) {
    throw await data.json();
  }
  return (await data.json()).message;
};

export const updateOffice = async (
  id: string,
  values: EditOfficeAttributes
) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/office/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(values),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const sendCommunication = async (values: CommunicationMessage) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/office/comunicate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(values),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const findAllSchools = async () => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/office/school`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  });
  if (!data.ok) {
    throw await data.json();
  }
  return (await data.json()).message;
};

export const findStudentByRegNo = async (regNo: string) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/student/reg/s`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify({ regNo }),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return (await data.json()).message;
};
