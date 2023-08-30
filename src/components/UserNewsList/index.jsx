import { useNewsContext } from "../../providers/NewsContext"
import { UserNewsCard } from "./UserNewsCard";

export const UserNewsList = () => {

    const {ownPosts} = useNewsContext();    

    return (
        <ul>
            {ownPosts.map(post => (<UserNewsCard key={post.id} post={post}/>))}
        </ul>
    )
}