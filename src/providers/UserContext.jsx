import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const registerRequest = async (formData, reset, setIsLoading) => {
    try {
      setIsLoading(true);
      await api.post("/users", formData);
      reset();
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Ops, algo deu errado, tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  const loginRequest = async (formData, setIsLoading) => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USER", JSON.stringify(data.user));
      navigate("/dashboard");
      toast.success("Login bem sucedido");
    } catch (error) {
      console.log(error);
      if (error.response.status >= 400) {
        toast.error("E-mail ou senha incorretos.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ registerRequest, loginRequest, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
