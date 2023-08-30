import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

const NewsContext = createContext({});

export const useNewsContext = () => {
	return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
    const [ownPosts, setOwnPosts] = useState([]);
    //stado para capturar post que está sendo editado
    const [editingPost, setEditingPost] = useState(null);

	useEffect(() => {
		const getAllPosts = async () => {
			const { data } = await api.get("posts?_embed=likes");
			setPosts(data);
		};

		getAllPosts();
	}, []);


    const getOwnPosts = async () => {
        const user = localStorage.getItem("@USER")
        try {
            const {data} = await api.get(`/posts/?${user.name}`);
            setOwnPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    //função request de edição do post
    const editPost = async (formData)=>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const { data } = await api.put(`/posts/${editingPost.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const newPostList = ownPosts.map(post =>{
                if (post.id === editingPost.id) {
                    return data;
                } else {
                    return post;
                }
            })
            setOwnPosts(newPostList)
            setEditingPost(null)
            toast.success("Post editado com sucesso.")
        } catch (error) {
            console.log(error)
            toast.error("Algo deu errado, tente novamente.")
        }
    }

    //função request de delete
    const deletePost = async (id)=>{
        const token = localStorage.getItem("@TOKEN")
        try {
            await api.delete(`/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const newPostList = ownPosts.filter(post=> post.id !==id);
            setOwnPosts(newPostList);
            toast.success("Post deletado com sucesso.");
        } catch (error) {
            console.log(error);
            toast.error("Exclusão não foi possível, tente novamente mais tarde");
        }
    }

    return (
    <NewsContext.Provider value={{posts, setPosts, singlePost, setSinglePost, ownPosts, getOwnPosts, editPost, editingPost, setEditingPost, deletePost}}>
        {children}
    </NewsContext.Provider>
    )
}

