import { EditForm } from "../../components/forms/EditForm";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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