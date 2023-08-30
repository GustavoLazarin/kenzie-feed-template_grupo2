import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import loginImg from "../../assets/loginImg.svg";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm";

export const LoginPage = () => {
  return (
    <div className="everything">
      <Header />
      <main className="content">
        <picture>
          <img src={loginImg} alt="Imagem de login" />
        </picture>

        <div className="stack-x-large flex column place-content-center">
          <div className="stack-large">
            <h1 className="heading-2">Acesse o KenzieFeed</h1>
            <p className="text-align-center">
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
      <Footer />
    </div>
  );
};
