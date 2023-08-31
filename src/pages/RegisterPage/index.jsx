import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { RegisterForm } from "../../components/forms/RegisterForm";
import { Header } from "../../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const RegisterPage = () => {
  return (
    <div className="everything">
      <Header />
      <main className="content relative ">
        <Link
          className="top-0 left-5 absolute grid-btn__back grid align-items-center justify-items-center  color-blue btn btn__small btn__secondary"
          to="/login"
        >
          <AiOutlineArrowLeft size={21} />
          Voltar
        </Link>
        <div className="w-full stack-x-large">

        <div className="w-full">
          <h1 className="heading-2">Cadastre um usuário</h1>
          <p className="text-align-center min-w-full">
            Preencha os campos corretamente para fazer login
          </p>
        </div>
        <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};
