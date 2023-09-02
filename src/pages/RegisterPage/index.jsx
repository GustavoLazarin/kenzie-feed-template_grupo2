import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDocTitle } from "../../hooks/useDocTitle";


export const RegisterPage = () => {
  useDocTitle("Cadastro");

  return (
    <>
      <main className="content overall-max-width grid grid-template-row-auto-1">
        <Link
          className="like-gap justify-self-start grid grid-btn__back align-items-center justify-items-center  btn btn__small btn__secondary"
          to="/login"
          aria-label="back"
          title="voltar"
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
    </>
  );
};
