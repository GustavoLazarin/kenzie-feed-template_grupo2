import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useNewsContext } from "../../../providers/NewsContext"

export const UserNewsCard = ({post}) => {
    const navigate = useNavigate()
    const { setEditingPost} = useNewsContext();

    const editBttn = (post)=>{
        setEditingPost(post);
        navigate(`/edit/${post.id}`);
    }

    return (
        <li>
            <div>
                <img src={post.image} alt="Imagem da notícia."/>
                <h3>{post.title}</h3>
            </div>
            <div>
                <button onClick={()=>editBttn(post)}><MdOutlineEdit/></button>
                <button ><MdDeleteOutline/></button>
            </div>
        </li>
    )
}