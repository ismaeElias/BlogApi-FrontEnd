export const TOKEN_KEY = "@MeuBlog-Token"; 
export const REFRESHTOKEN_KEY = "@MeuBlog-RefreshToken";
export const USUARIO = "@MeuBlog-Usuario";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (accessToken,refreshToken,usuario) => {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESHTOKEN_KEY, refreshToken);
    localStorage.setItem(USUARIO, JSON.stringify(usuario));
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const Atualiza =  (accessToken,refreshToken,usuario) => {
  localStorage.setItem(USUARIO,usuario);
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESHTOKEN_KEY, refreshToken);
};