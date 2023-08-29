import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

const UserContext = createContext({})

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
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
            setUser(data.user);
            localStorage.setItem('@TOKEN', data.accessToken);
            // localStorage.setItem('@ID', data.user.id);
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
        setUser(null);
        localStorage.removeItem("@TOKEN");
        navigate("/");
    }

    return(
    <UserContext.Provider value={{registerRequest, loginRequest, logOut, user}}>
        {children}
    </UserContext.Provider>
    )
}
