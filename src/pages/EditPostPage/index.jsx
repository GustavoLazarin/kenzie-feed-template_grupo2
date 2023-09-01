import { Navigate } from "react-router-dom";
import { EditForm } from "../../components/forms/EditForm";
import { useNewsContext } from "../../providers/NewsContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDocTitle } from "../../hooks/useDocTitle";
import { Link } from "react-router-dom";

export const EditPostPage = () => {
  const { editingPost } = useNewsContext();

  useDocTitle("editar post")

  return (
    <>
      <main className="bg-grey  align-items-center min-w-full grid justify-items-center">
        <div className="w-full stack-large container__edit padding-i-24 padding-b-24 ">
          <div className="flex space-between ">
            <h1 className="bold post-title">Editando:</h1>
            
            <Link
          className="btn__secondary btn bg-grey flex align-items-center btn__small btn__gap"
          to="/dashboard"
          aria-label="back"
          title="voltar"
        >
          <AiOutlineArrowLeft size={21} />
          Voltar
        </Link>
          </div>
          <div>{editingPost ? <EditForm /> : <Navigate to="/dashboard" />}</div>
        </div>
      </main>
    </>
  );
};
