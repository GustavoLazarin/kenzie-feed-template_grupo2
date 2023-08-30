import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import Logo from '../../assets/KenzieFeed-Logo.svg';


export const Header = () => {
  const { logOut } = useUserContext();
  const token = localStorage.getItem("@TOKEN");

  return (
    <header>
      <div className="header">
        <img src={Logo} alt="KZ-logo" />
        {token ? (
          <div className="header__user">
            <button>Usuário</button>
            <Link  to="/dashboard">
              Dashboard
            </Link>
            <button className="btn btn__small" onClick={logOut}>Sair (icone)</button>
          </div>
        ) : (
          <Link className="btn btn__small btn__primary w-auto" to="/login">Acessar</Link>
        )}
      </div>
    </header>
  );
};
