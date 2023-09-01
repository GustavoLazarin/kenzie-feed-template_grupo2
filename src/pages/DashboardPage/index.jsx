import { useEffect } from "react";
import { UserNewsList } from "../../components/UserNewsList";
import { MdAddCircleOutline } from "react-icons/md";
import { useNewsContext } from "../../providers/NewsContext";
import { NewPostModal } from "../../components/modals/NewPostModal";

export const DashboardPage = () => {
  const { getOwnPosts, isCreating, setIsCreating } = useNewsContext();

  useEffect(() => {
    getOwnPosts();
  }, []);

  return (
    <div className="min-w-full content bg-grey">
      <main className="h-full w-full padding-b-24 bg-grey grid justify-items-center ">
        <section className="grid-template-row-auto-1 h-full min-w-full overall-max-width grid justify-items-center stack-large">
          <div className="w-full overall-max-width align-items-center grid grid-heading">
            <h1 className="heading-3 justify-self-start">Suas Publicações</h1>
            <button
              className="min-w-full w-full btn btn__primary btn__small justify-content-center flex align-items-center btn-max-width like-gap "
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
