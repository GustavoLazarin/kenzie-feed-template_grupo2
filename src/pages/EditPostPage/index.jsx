import { Navigate, useNavigate } from "react-router-dom";
import { EditForm } from "../../components/forms/EditForm";
import { useNewsContext } from "../../providers/NewsContext";

export const EditPostPage = () => {
    const navigate = useNavigate()
    const { editingPost } = useNewsContext()

    return (
        <>
            <main>
              <div>
                <h1>Editando:</h1>
                <button onClick={()=>navigate("/dashboard")}>Voltar</button>
                </div>  

                <div>
                 {editingPost?<EditForm/>: <Navigate to="/dashboard"/>}
                </div>
            </main>
        </>
    )
}