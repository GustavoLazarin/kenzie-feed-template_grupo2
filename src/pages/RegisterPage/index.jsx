import { Footer } from "../../components/Footer"
import { RegisterForm } from "../../components/forms/RegisterForm"
import { Header } from "../../components/header"

export const RegisterPage = () => {
    return (
      <>
        <Header/>
          <section>
            <div>
              <button>Voltar</button>
            <div/>
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