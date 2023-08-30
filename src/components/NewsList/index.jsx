import { NewsCard } from './NewsCard';

export const ({ newPosts }) => {
	return (
		<ul className="grid justify-items-center register__form__lg news-gap">
    {newPosts.map(post => (
      <NewsCard key={post.id} post={post} />
    ))}
  </ul>
	);
};
