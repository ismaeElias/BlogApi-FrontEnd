import React, { useState, useContext, useEffect } from "react";
import api from "../api";
import { USUARIO } from "../../services/auth";

export const PostContext = React.createContext();

export const usePosts = () => useContext(PostContext);

export const PostagensProvider = (props) => {
  const [post, setPost] = useState([]);

  async function buscaPost(id) {
    api.get(`/usuarios/${id}/postagem`).then((response) => {
      setPost(response.data);
    });
  }

  async function deletaPost(UserID, id) {
    await api
      .delete(`/usuarios/${UserID}/postagem/${id}`)
      .then(() => {
        buscaPost(UserID);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    const User = JSON.parse(localStorage.getItem(USUARIO));
    if (!User) {
      setPost([]);
    } else {
      buscaPost(User.id);
    }
  }, []);

  return (
    <PostContext.Provider value={{ post, setPost, deletaPost,buscaPost }}>
      {props.children}
    </PostContext.Provider>
  );
};
