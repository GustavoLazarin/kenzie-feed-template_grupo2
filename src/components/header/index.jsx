import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";

export const Header = () => {

  const { logOut } = useUserContext();
  const token = localStorage.getItem("@TOKEN");

  return (
    <header>
      
      <div className="header">
        <img src="#" alt="KZ-logo" />
        {token ? (
          <div>
            <button>Usuario</button>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logOut}>Sair (icone)</button>
        </div>
        ) : <Link to="/login">Acessar</Link>}
      </div>
    </header>
  );
};
