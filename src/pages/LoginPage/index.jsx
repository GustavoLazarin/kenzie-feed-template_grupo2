import { Footer } from "../../components/Footer";
import { Header } from "../../components/header";
import loginImg from "../../assets/loginImg.svg";
import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";
import { LoginForm } from "../../components/forms/LoginForm";

export const LoginPage = () => {

  const {loginRequest} = useUserContext();

  const submit = (formData) => {
    console.log(formData)
    loginRequest(formData);
  };

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
            
            <LoginForm submit={submit}/>

          <div>
            <h3>Não é cadastrado?</h3>
            <Link to="/register">
              <button>Cadastre-se</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
