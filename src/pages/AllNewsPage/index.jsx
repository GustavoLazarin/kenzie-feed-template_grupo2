import { Footer } from "../../components/Footer";
import { NewsList } from "../../components/NewsList";
import { Header } from "../../components/header";

export const AllNewsPage = () => {
	return (
		<>
			<Header />
			<main>
				<h1>Todas as notícias</h1>
				<NewsList />
			</main>
			<Footer />
		</>
	);
};
