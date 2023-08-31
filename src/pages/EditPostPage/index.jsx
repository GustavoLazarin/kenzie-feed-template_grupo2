import { EditForm } from "../../components/forms/EditForm";

export const EditPostPage = () => {
    return (
        <>
            <main>
              <div>
                <h1>Editando:</h1>
                <button>Voltar</button>
                </div>  

                <div>
                    <EditForm/>
                </div>
            </main>
        </>
    )
}