const API_URL = `${import.meta.env.VITE_API_URL}`;

export const login = async (credentials: LoginAttributes) => {
  const data = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const forgetPassword = async (userData: forgetPasswordAttributes) => {
  const data = await fetch(`${API_URL}/auth/forget_password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};

export const resetPassword = async (userData: resetPasswordAttributes) => {
  const data = await fetch(`${API_URL}/auth/reset_password`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!data.ok) {
    throw await data.json();
  }
  return await data.json();
};
