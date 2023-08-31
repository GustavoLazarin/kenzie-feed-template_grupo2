import { Navigate, useNavigate } from "react-router-dom";
import { EditForm } from "../../components/forms/EditForm";
import { useNewsContext } from "../../providers/NewsContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const EditPostPage = () => {
  const navigate = useNavigate();
  const { editingPost } = useNewsContext();

  return (
    <>
      <main className="bg-grey  align-items-center min-w-full grid justify-items-center">
        <div className="w-full stack-large container__edit padding-i-24 padding-b-24 ">
          <div className="flex space-between ">
            <h1 className="bold post-title">Editando:</h1>
            <button className="btn__secondary btn bg-grey flex align-items-center btn__small btn__gap" onClick={() => navigate("/dashboard")}>
              <AiOutlineArrowLeft size={22} />
              Voltar
            </button>
          </div>

          <div>{editingPost ? <EditForm /> : <Navigate to="/dashboard" />}</div>
        </div>
      </main>
    </>
  );
};
