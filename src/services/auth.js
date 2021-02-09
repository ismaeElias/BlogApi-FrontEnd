import api from "./api";
export const TOKEN_KEY = "@MeuBlog-Token";
export const REFRESHTOKEN_KEY = "@MeuBlog-RefreshToken";
export const USUARIO = "@MeuBlog-Usuario";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);


export const login = (accessToken, refreshToken, usuario) => {
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESHTOKEN_KEY, refreshToken);
  localStorage.setItem(USUARIO, JSON.stringify(usuario));
};

export const logout = async () => {
  const token = localStorage.getItem(REFRESHTOKEN_KEY);
  try {
    await api.post("/usuarios/logout", { refreshToken: token }).then(() => {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESHTOKEN_KEY);
      localStorage.removeItem(USUARIO);
      return 'response';
    });
  } catch (e) {
    console.log(e);
  }
};

export const Atualiza = (accessToken, refreshToken, usuario) => {
  localStorage.setItem(USUARIO, usuario);
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESHTOKEN_KEY, refreshToken);
};
