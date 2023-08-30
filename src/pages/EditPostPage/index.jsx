import { Footer } from "../../components/Footer"
import { EditForm } from "../../components/forms/EditForm"
import { Header } from "../../components/header"

export const EditPostPage = () => {
    return (
        <div>
            <Header/>
            <main>
              <div>
                <h1>Editando:</h1>
                <button>Voltar</button>
                </div>  

                <div>
                    <EditForm/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}