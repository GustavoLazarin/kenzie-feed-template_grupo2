import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import Logo from "../../assets/KenzieFeed-Logo.svg";
import { BiExit } from "react-icons/bi";
import { useEffect, useState } from "react";

export const Header = () => {
    const { logOut } = useUserContext();
    const token = localStorage.getItem("@TOKEN");
    const user = JSON.parse(localStorage.getItem("@USER"));
    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();

    const loc = useLocation();

    useEffect(() => {
        setIsVisible(false);
    }, [loc.pathname]);

    return (
        <header className="header">
            <div className="container">
                <button
                    onClick={() => navigate("/")}
                    aria-label="return-Home"
                    title={loc.pathname !== "/" ? "Retornar para Home" : null}
                >
                    <img src={Logo} alt="KZ-logo" />
                </button>
                {token ? (
                    <div className="header__user">
                        <button
                            className="btn btn__primary btn__user"
                            onClick={() => setIsVisible(!isVisible)}
                        >
                            {user.name[0].toUpperCase()}
                        </button>
                        <div
                            className={`options ${isVisible ? "show" : null}`}
                            onMouseLeave={() => setIsVisible(false)}
                        >
                            {loc.pathname !== "/dashboard" ? (
                                <Link
                                    className="btn btn__secondary btn__small"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            ) : null}
                            <button className="btn btn__exit" onClick={logOut}>
                                <BiExit size={25} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link
                        title="Ir para Login"
                        aria-label="Go-login"
                        className="btn btn__small btn__primary w-auto"
                        to="/login"
                    >
                        Acessar
                    </Link>
                )}
            </div>
        </header>
    );
};
