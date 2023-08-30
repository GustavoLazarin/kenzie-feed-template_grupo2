import { Footer } from "../../components/Footer";
import { NewsList } from "../../components/NewsList";
import { Header } from "../../components/header";
import { useNewsContext } from "../../providers/NewsContext";

export const AllNewsPage = () => {
	const { posts } = useNewsContext();

	return (
		<>
			<Header />
			<main>
				<h1>Todas as notícias</h1>
				<NewsList newPosts={posts} />
			</main>
			<Footer />
		</>
	);
};
