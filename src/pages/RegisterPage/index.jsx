import { RegisterForm } from "../../components/forms/RegisterForm"

export const RegisterPage = () => {
    return (
        <div>
            <button>Voltar</button>
            <div>
                <h2>Cadastre um usuário</h2>
                <p>Preencha os campos corretamente para fazer login</p>
                <RegisterForm/>
            </div>
        </div>
    )
}