import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useNewsContext } from "../../../providers/NewsContext";

export const UserNewsCard = ({ post }) => {
  const navigate = useNavigate();
  const { setEditingPost, deletePost } = useNewsContext();

  const editBttn = (post) => {
    setEditingPost(post);
    navigate(`/edit/${post.id}`);
  };

  return (
    <li className="userCard">
      <div className="post-image">
        <img src={post.image} alt="Imagem da notícia." />
      </div>
      <h3 className="bold">{post.title}</h3>
      <div className="flex userCard__btns__gap ">
        <button
          className="btn bg-grey color-blue"
          onClick={() => editBttn(post)}
        >
          <MdOutlineEdit size={30} />
        </button>
        <button
          className="btn bg-grey color-blue"
          onClick={() => deletePost(post.id)}
        >
          <MdDeleteOutline size={30} />
        </button>
      </div>
    </li>
  );
};
