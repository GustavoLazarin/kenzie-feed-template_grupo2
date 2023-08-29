import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../providers/UserContext";

export const PrivateRoutes = () => {

    const { user } = useUserContext();
    const token = localStorage.getItem("@TOKEN");

    return user || token ? <Outlet/> : <Navigate to="/"/>
}