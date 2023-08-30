import { createContext, useContext, useState } from "react"
import { api } from "../services/api";

const NewsContext = createContext();

export const useNewsContext = () => {
    return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {

    const [ownPosts, setOwnPosts] = useState([]);

    const getOwnPosts = async () => {
        const user = localStorage.getItem("@USER")
        try {
            const {data} = await api.get(`/posts/?${user.name}`);
            setOwnPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <NewsContext.Provider value={{ownPosts, getOwnPosts}}>
        {children}
    </NewsContext.Provider>
    )
}