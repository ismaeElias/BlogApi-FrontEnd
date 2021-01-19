export const TOKEN_KEY = "@MeuBlog-Token"; 
export const REFRESHTOKEN_KEY = "@MeuBlog-RefreshToken";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (accessToken,refreshToken) => {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESHTOKEN_KEY, refreshToken);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};