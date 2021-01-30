export const TOKEN_KEY = "@MeuBlog-Token"; 
export const REFRESHTOKEN_KEY = "@MeuBlog-RefreshToken";
export const ID = "@MeuBlog-ID";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (accessToken,refreshToken,id) => {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESHTOKEN_KEY, refreshToken);
    localStorage.setItem(ID, id);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const Atualiza =  (accessToken,refreshToken,id) => {
  localStorage.setItem(ID,id);
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESHTOKEN_KEY, refreshToken);
};