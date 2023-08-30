import { Footer } from "../../components/Footer";
import { Header } from "../../components/header";
import homeImg from "../../assets/homeImg.svg";
import { Link } from "react-router-dom";
import { NewsList } from "../../components/NewsList";

export const HomePage = () => {
  return (
    <div className="everything">
      <Header />
      <main className="content">
        <section className="stack-large">
          <p className="bold text-align-center">KENZIE FEED</p>
          <h1 className="heading-2">Seja muito bem vindo ao KenzieFeed</h1>
          <div className="stack-x-large">
			<p className="text-align-center">Fique por dentro das últimas notícias</p>
		  </div>
        </section>
        <section className="stack-x-large">
			<div className="stack-2x-large">

          <img src={homeImg} alt="Kenzie Feed image" />
          <div className="flex align-items-center space-between">
            <h2 className="heading-2">Últimas notícias</h2>
            <Link className="btn__register btn btn__primary btn__small" to={"/news"}>Ver tudo</Link>
			</div>
          </div>
          <NewsList />
        </section>
      </main>
      <Footer />
    </div>
  );
};
