import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NewsContext = createContext({});

export const useNewsContext = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState({});
  const [ownPosts, setOwnPosts] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [likeId, setLikeId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await api.get("posts?_embed=likes");
      setPosts(data);
    };

    getAllPosts();
  }, []);

  useEffect(() => {
    checkLikePost();
  }, [singlePost]);

  const getOwnPosts = async () => {
    const user = JSON.parse(localStorage.getItem("@USER"));
    try {
      const { data } = await api.get(`/posts/?userId=${user.id}`);
      setOwnPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.put(`/posts/${editingPost.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newPostList = ownPosts.map((post) => {
        if (post.id === editingPost.id) {
          return data;
        } else {
          return post;
        }
      });
      setOwnPosts(newPostList);
      setEditingPost(null);
      toast.success("Post editado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado, tente novamente.");
    }
  };

  const deletePost = async (id) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newPostList = ownPosts.filter((post) => post.id !== id);
      setOwnPosts(newPostList);
      toast.success("Post deletado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Exclusão não foi possível, tente novamente mais tarde");
    }
  };
  const createPost = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    const user = JSON.parse(localStorage.getItem("@USER"));
    const post = { ...formData, owner: user.name, userId: user.id };

    try {
      const { data } = await api.post("posts", post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOwnPosts([...ownPosts, data]);
      setIsCreating(false);
      toast.success("Post criado com sucesso");
    } catch (error) {
      if (error.response.data.length > 0) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  const likePost = async (id) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const user = JSON.parse(localStorage.getItem("@USER"));
      const likeStructure = { userId: user.id, postId: Number(id) };

      const { data } = await api.post("likes", likeStructure, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSinglePost({
        ...singlePost,
        likes: [...singlePost.likes, data],
      });
      setLikeId(data.id);
      toast.success("Post curtido com sucesso");
    } catch (error) {
      // Haverá erro caso o token tenha expirado / o usuário não esteja logado
      toast.error("Você precisa estar logado para curtir uma publicação");
    }
  };

  const unlikePost = async (likeId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      api.delete(`likes/${likeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newLikeList = singlePost.likes.filter(
        (likeInfo) => likeInfo.id !== likeId
      );
      setSinglePost({ ...singlePost, likes: newLikeList });
      setLikeId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const checkLikePost = () => {
    const userInfo = JSON.parse(localStorage.getItem("@USER"));
    setLikeId(null);

    if (userInfo) {
      singlePost?.likes?.forEach((likeInfo) => {
        if (likeInfo.userId === userInfo.id) {
          setLikeId(likeInfo.id);
        }
      });
    }
  };

  return (
    <NewsContext.Provider
      value={{
        posts,
        setPosts,
        singlePost,
        setSinglePost,
        ownPosts,
        getOwnPosts,
        editPost,
        editingPost,
        setEditingPost,
        deletePost,
        createPost,
        isCreating,
        setIsCreating,
        likePost,
        unlikePost,
        likeId,
        setLikeId,
        checkLikePost,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
