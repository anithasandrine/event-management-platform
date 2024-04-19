import { getLoggedInuser } from "../utils/LoggedinUser";

const API_URL = `${import.meta.env.VITE_API_URL}`;

export const createPost = async (data: CareerPostAtributes) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  // const formData = new FormData();
  // formData.append("title", data.title);
  // formData.append("description", data.description);
  // formData.append("category", data.category);
  // formData.append("author", data.author);
  // const filesArray = [];
  // filesArray.push(data.image[0]);
  // for (let index = 0; index < filesArray.length; index++) {
  //   const element = filesArray[index];
  //   formData.append("profilePicture", element);
  // }
  const res = await fetch(`${API_URL}/post`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw await res.json();
  }
  return await res.json();
};

export const findAllPosts = async () => {
  const res = await fetch(`${API_URL}/post`);
  if (!res.ok) {
    throw await res.json();
  }
  return await res.json();
};

export const findPost = async (id: string) => {
  const res = await fetch(`${API_URL}/post/${id}`);
  if (!res.ok) {
    throw await res.json();
  }
  return await res.json();
};

export const deletePost = async (id: string) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const data = await fetch(`${API_URL}/post/${id}`, {
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

export const updatePost = async (id: string, data: CareerPostAtributes) => {
  const loggedin = getLoggedInuser();
  const Token = "accessToken" in loggedin ? loggedin.accessToken : "";
  const res = await fetch(`${API_URL}/post/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${Token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw await res.json();
  }
  return await res.json();
};
