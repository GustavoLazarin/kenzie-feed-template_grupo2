import { Footer } from "../../components/Footer";
import { NewsList } from "../../components/NewsList";
import { useNewsContext } from "../../providers/NewsContext";
import { Header } from "../../components/Header";

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
