import { Footer } from "../../components/Footer";
import { UserNewsList } from "../../components/UserNewsList";
import { Header } from "../../components/header";
import { MdAddCircleOutline } from "react-icons/md"

export const DashboardPage = () => {
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
