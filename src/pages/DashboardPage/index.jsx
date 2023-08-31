import { useEffect } from "react";
import { UserNewsList } from "../../components/UserNewsList";
import { MdAddCircleOutline } from "react-icons/md";
import { useNewsContext } from "../../providers/NewsContext";
import { NewPostModal } from "../../components/modals/NewPostModal";

export const DashboardPage = () => {
  const { getOwnPosts, isCreating, setIsCreating } = useNewsContext();

  // Efeito de montagem, executa 1x na montagem do componente
  useEffect(() => {
    getOwnPosts(); //Faz uma requisição GET nos posts do usuário
  }, []);

  return (
    <div className="everything">
      <main className="w-full bg-grey grid justify-items-center">
        <section className="padding-b-24 min-w-full overall-max-width grid justify-items-center stack-large">
          <div className="dashboard__heading">
            <h1 className="heading-3 justify-self-start">Suas Publicações</h1>
            <button
              className="btn justify-content-center flex align-items-center btn__primary  btn__max-width btn__newPost-gap "
              onClick={() => setIsCreating(true)}
            >
              <MdAddCircleOutline />
              Novo Post
            </button>
          </div>
          <UserNewsList />
        </section>
      </main>
      {isCreating ? <NewPostModal /> : null}
    </div>
  );
};
