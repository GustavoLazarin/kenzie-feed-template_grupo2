import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { UserNewsList } from "../../components/UserNewsList";
import { Header } from "../../components/Header";
import { MdAddCircleOutline } from "react-icons/md"
import { useNewsContext } from "../../providers/NewsContext";

export const DashboardPage = () => {

  const { getOwnPosts } = useNewsContext();

  // Efeito de montagem, executa 1x na montagem do componente
  useEffect(() => {
    getOwnPosts() //Faz uma requisição GET nos posts do usuário
}, [])

  return (
    <div>
      <Header/>
      <section>
        <div>
          <h2>Suas Publicações</h2>
          <button><MdAddCircleOutline/> Novo Post</button>
        </div>
        <UserNewsList/>
      </section>
      <Footer/>
    </div>
  );
};
