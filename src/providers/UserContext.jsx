import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

const UserContext = createContext({})

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();


    const registerRequest = async (formData, reset) => {
        try {
            await api.post("/users", formData);
            reset();
            toast.success('Cadastro realizado com sucesso!');
            navigate("/login")
        } catch (error) {
            toast.error("Ops, algo deu errado, tente novamente!")
        }
    }

    const loginRequest = async (formData) => {
        try {
            const { data } = await api.post('/login', formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USER", JSON.stringify(data.user));
            navigate('/dashboard');
            toast.success('Login feito com sucesso, você será redirecionado(a) para a dashboard')
        } catch (error) {
            console.log(error)
            if (error.response.status >= 400) {
                toast.error('E-mail ou senha incorretos.')
            }
        }
    }

    const logOut = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USER");
        navigate("/");
    }

    const getUserPosts = async () => {
        const user = localStorage.getItem("@USER");
        try {
            const {data} = await api.get(`/posts/?${user.name}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return(
    <UserContext.Provider value={{registerRequest, loginRequest, logOut}}>
        {children}
    </UserContext.Provider>
    )
}
