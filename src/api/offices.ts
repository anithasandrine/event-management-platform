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
  const data = await fetch(`${API_URL}/office/comunication`, {
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

export const OfficeUpdatePicture = async (picUlr: FileList) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";

  const formData = new FormData();
  const filesArray = [];
  filesArray.push(picUlr[0]);
  for (let index = 0; index < filesArray.length; index++) {
    const element = filesArray[index];
    formData.append("profilePicture", element);
  }
  const data = await fetch(`${API_URL}/office/profile_pic`, {
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

export const updateOfficePasswordApi = async (
  token: UpdatePasswordAttributes
) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/auth/office/password`, {
    method: "PATCH",
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

export const officeUpdateInfo = async (updates: UpdateOfficeAttributes) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const id = "id" in loggedin ? loggedin.id : "";

  const data = await fetch(`${API_URL}/office/${id}`, {
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
