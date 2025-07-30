export const login = (username: string) => {
  localStorage.setItem("auth", JSON.stringify({ username }));
};

export const logout = () => {
  localStorage.removeItem("auth");
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("auth") !== null;
};