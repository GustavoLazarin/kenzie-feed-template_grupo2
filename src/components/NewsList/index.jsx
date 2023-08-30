import { NewsCard } from "./NewsCard";

export const NewsList = ({ newPosts }) => {
	return (
		<ul>
			{newPosts.map(post => (
				<NewsCard key={post.id} post={post} />
			))}
		</ul>
	);
};
