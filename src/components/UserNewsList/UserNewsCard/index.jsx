import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md"

export const UserNewsCard = ({post}) => {
    return (
        <li>
            <div>
                <img src={post.image} alt="Imagem da notícia."/>
                <h3>{post.title}</h3>
            </div>
            <div>
                <button><MdOutlineEdit/></button>
                <button><MdDeleteOutline/></button>
            </div>
        </li>
    )
}