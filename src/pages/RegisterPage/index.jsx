import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { RegisterForm } from "../../components/forms/RegisterForm"
import { Header } from "../../components/header"

export const RegisterPage = () => {

    return (
      <div className="everything">
        <Header/>
          <main className="content">
              <Link to="/login">Voltar</Link>
              <div>
                  <h1 className="heading-2">Cadastre um usuário</h1>
                  <p className="text-align-center">Preencha os campos corretamente para fazer login</p>
              </div>
              <RegisterForm/>
          </main>
       <Footer/>
      </div>
    )
}