import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import Logo from "../../assets/KenzieFeed-Logo.svg";
import { BiExit } from "react-icons/bi";

export const Header = () => {
  const { logOut } = useUserContext();
  const token = localStorage.getItem("@TOKEN");

  return (
    <header>
      <div className="header">
        <img src={Logo} alt="KZ-logo" />
        {token ? (
          <div className="header__user">
            <button className="btn btn__primary btn__small">Usuário</button>
            <Link className="btn btn__secondary btn__small" to="/dashboard">
              Dashboard
            </Link>
            <button className="btn btn__small btn__exit" onClick={logOut}> 
              <BiExit size={25}/>
            </button>
          </div>
        ) : (
          <Link className="btn btn__small btn__primary w-auto" to="/login">
            Acessar
          </Link>
        )}
      </div>
    </header>
  );
};
