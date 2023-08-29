import { Footer } from '../../components/Footer';
import { Header } from '../../components/header';
import homeImg from '../../assets/homeImg.svg';
import { Link } from 'react-router-dom';
import { NewsList } from '../../components/NewsList';

export const HomePage = () => {
	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>KENZIE FEED</h3>
					<h1>Seja muito bem vindo ao KenzieFeed</h1>
					<p>Fique por dentro das últimas notícias</p>
					<img src={homeImg} alt="Kenzie Feed image" />
				</section>
				<section>
					<div>
						<h2>Últimas notícias</h2>
						<Link to={'/news'}>Ver tudo</Link>
					</div>
					<NewsList />
				</section>
			</main>
			<Footer />
		</div>
	);
};
