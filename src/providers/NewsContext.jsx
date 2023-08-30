import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"

const NewsContext = createContext()

export const useNewsContext = () => {
    return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {
    const [ownPosts, setOwnPosts] = useState([])
    const [isCreating, setIsCreating] = useState(false)

    const getOwnPosts = async () => {
        const user = localStorage.getItem("@USER")
        try {
            const { data } = await api.get(`/posts/?${user.name}`)
            setOwnPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const createPost = async (formData) => {
        const token = localStorage.getItem("@TOKEN")
        const user = JSON.parse(localStorage.getItem("@USER"))

        const post = { ...formData, owner: user.name, userId: user.id }

        try {
            const { data } = await api.post("posts", post, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            toast.success("Post criado com sucesso")

            setOwnPosts([...ownPosts, data])
        } catch (error) {
            if (error.response.data.length > 0) {
                console.log(error.response.data)
            } else {
                console.log(error.message)
            }
        }
    }

    return (
        <NewsContext.Provider
            value={{
                ownPosts,
                getOwnPosts,
                createPost,
                isCreating,
                setIsCreating,
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}
