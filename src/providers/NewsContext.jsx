import { createContext, useContext, useState } from "react"
import { api } from "../services/api";
import { toast } from "react-toastify";

const NewsContext = createContext();

export const useNewsContext = () => {
    return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {

    const [ownPosts, setOwnPosts] = useState([]);
    //stado para capturar post que está sendo editado
    const [editingPost, setEditingPost] = useState(null);

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

    return (
    <NewsContext.Provider value={{ownPosts, getOwnPosts, editPost, editingPost, setEditingPost}}>
        {children}
    </NewsContext.Provider>
    )
}