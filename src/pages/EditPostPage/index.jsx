import { useNavigate } from "react-router-dom";
import { EditForm } from "../../components/forms/EditForm";

export const EditPostPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <main>
              <div>
                <h1>Editando:</h1>
                <button onClick={()=>navigate("/dashboard")}>Voltar</button>
                </div>  

                <div>
                    <EditForm/>
                </div>
            </main>
        </>
    )
}