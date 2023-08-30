import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const NewsContext = createContext({});

export const useNewsContext = () => {
	return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getAllPosts = async () => {
			const { data } = await api.get("posts?_embed=likes");
			setPosts(data);
		};

		getAllPosts();
	}, []);

	return (
		<NewsContext.Provider value={{ posts, setPosts }}>
			{children}
		</NewsContext.Provider>
	);
};
