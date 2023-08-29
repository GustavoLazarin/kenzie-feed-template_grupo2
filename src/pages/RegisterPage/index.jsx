import { Footer } from "../../components/Footer"
import { RegisterForm } from "../../components/forms/RegisterForm"
import { Header } from "../../components/header"

export const RegisterPage = () => {
    return (
        <div>
            <Header/>
            <section>
                <RegisterForm/>
            </section>
            <Footer/>
        </div>
    )
}