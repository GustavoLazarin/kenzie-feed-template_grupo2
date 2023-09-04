import loginImg from "../../assets/loginImg.svg";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm";
import { useDocTitle } from "../../hooks/useDocTitle";

export const LoginPage = () => {
    useDocTitle("Login");

    return (
        <>
            <main className="content login-container grid">
                <picture>
                    <img src={loginImg} alt="Imagem de login" />
                </picture>
                <div className="stack-x-large flex column place-content-center">
                    <div className="content min-w-full stack-large text-align-center">
                        <h1 className="heading-2">Acesse o KenzieFeed</h1>
                        <p className="min-w-full">
                            Preencha os campos corretamente para fazer login
                        </p>
                    </div>
                    <LoginForm />
                    <div className="stack-medium grid justify-items-center">
                        <p>Não é cadastrado?</p>
                        <Link className="btn__tertiary" to="/register">
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};
