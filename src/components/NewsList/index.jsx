import { NewsCard } from './NewsCard';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export const NewsList = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getAllPosts = async () => {
			const { data } = await api.get('posts?_embed=likes');
			setPosts(data);
		};

		getAllPosts();
	}, []);

	return (
		<ul>
			{posts.map(post => (
				<NewsCard key={post.id} post={post} />
			))}
		</ul>
	);
};
