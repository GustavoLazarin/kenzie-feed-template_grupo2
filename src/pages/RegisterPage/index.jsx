import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { RegisterForm } from "../../components/forms/RegisterForm"
import { Header } from "../../components/Header"

export const RegisterPage = () => {

    return (
      <>
        <Header/>
          <section>
              <Link to="/login">Voltar</Link>
              <div>
                  <h2>Cadastre um usuário</h2>
                  <p>Preencha os campos corretamente para fazer login</p>
              </div>
              <RegisterForm/>
          </section>
       <Footer/>
      </>
    )
}