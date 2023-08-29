import { Footer } from "../../components/Footer";
import { Header } from "../../components/header";
import loginImg from "../../assets/loginImg.svg";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm";

export const LoginPage = () => {
  return (
    <div>
      <Header />
      <section>
        <div>
          <img src={loginImg} alt="Imagem de login" />
        </div>
        <div>
          <div>
            <h1>Acesse o KenzieFeed</h1>
            <p>Preencha os campos corretamente para fazer login</p>
          </div>
            
            <LoginForm />

          <div>
            <h3>Não é cadastrado?</h3>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
