import homeImg from "../../assets/homeImg.svg";
import { Link } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { useNewsContext } from "../../providers/NewsContext";
import { Skeleton } from "../../components/Skeleton";

export const HomePage = () => {
  const { posts, isLoading } = useNewsContext();
  const newPostsList = posts.slice(0, 4);
  
  return (
    <>
      {isLoading ? <Skeleton/> : (
        <main className="content overall-max-width">
          <section className="min-w-full stack-large">
            <h3 className="min-w-full bold text-align-center">KENZIE FEED</h3>
            <h1 className="heading-2 text-align-center min-w-full">
              Seja muito bem vindo ao KenzieFeed
            </h1>
            <div className="stack-x-large ">
              <p className="min-w-full text-align-center">
                Fique por dentro das últimas notícias
              </p>
            </div>
          </section>
          <section className="min-w-full stack-x-large">
            <div className=" stack-2x-large grid justify-items-center">
              <img src={homeImg} alt="Kenzie Feed image" />
              <div className="min-w-full overall-max-width align-items-center grid grid-heading">
                <h2 className="heading-2 justify-self-start">Últimas notícias</h2>
                <Link
                  className="btn__max-width btn__register btn btn__primary btn__small"
                  to={"/news"}
                >
                  Ver tudo
                </Link>
              </div>
            </div>
            <NewsList newPosts={newPostsList} />
          </section>
        </main>
      )}
    </>
  );
};
