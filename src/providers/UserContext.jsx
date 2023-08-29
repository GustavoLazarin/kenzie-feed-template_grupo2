import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext({})

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const loginRequest = async (formData) => {
        try {
            const { data } = await api.post('/login', formData);
            localStorage.setItem('@TOKEN', data.accessToken);
            localStorage.setItem('@ID', data.user.id);
            navigate('/dashboard');
            toast.success('Login feito com sucesso, você será redirecionado(a) para a dashboard')
        } catch (error) {
            if (error.response.status >= 400) {
                toast.error('E-mail ou senha incorretos.')
            }
        }
    }

    return(
    <UserContext.Provider value={{loginRequest}}>
        {children}
    </UserContext.Provider>
    )
}
