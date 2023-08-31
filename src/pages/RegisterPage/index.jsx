import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/forms/RegisterForm"
import { AiOutlineArrowLeft } from "react-icons/ai"

export const RegisterPage = () => {
    return (
        <>
            <main className="content relative overall-max-width">
                <Link
                    className="top-0 left-5 absolute grid-btn__back grid align-items-center justify-items-center  btn btn__small btn__secondary"
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
        </>
    )
}
