export const getLoggedInuser = (): LoggedInUser | object => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : {};
};
