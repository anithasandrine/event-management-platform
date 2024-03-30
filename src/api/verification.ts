const API_URL = `${import.meta.env.VITE_API_URL}`;

export const emailVerification = async (id: string) => {
  const result = await fetch(`${API_URL}/auth/verify_email/${id}`, {
    method: "POST",
  });

  if (!result.ok) {
    throw await result.json();
  }
  return await result.json();
};

export const phoneVerification = async (token: PhoneToken) => {
  const result = await fetch(`${API_URL}/auth/verify_phone`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  });

  if (!result.ok) {
    throw await result.json();
  }
  return await result.json();
};
