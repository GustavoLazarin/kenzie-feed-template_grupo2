import { NewsCard } from "./NewsCard";

export const NewsList = () => {
	return (
		<ul>
			{posts.map(post => (
				<NewsCard key={post.id} post={post} />
			))}
		</ul>
	);
};
