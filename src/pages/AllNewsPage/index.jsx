import { NewsList } from "../../components/NewsList";
import { useNewsContext } from "../../providers/NewsContext";

export const AllNewsPage = () => {
	const { posts } = useNewsContext();

	return (
		<>
			<main>
				<h1>Todas as notícias</h1>
				<NewsList newPosts={posts} />
			</main>
		</>
	);
};
