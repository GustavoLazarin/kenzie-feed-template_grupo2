import { MdClose } from "react-icons/md"
import { NewPostForm } from "../../forms/NewPostForm"
import { useNewsContext } from "../../../providers/NewsContext"

export const NewPostModal = () => {
    const { setIsCreating } = useNewsContext()

    return (
        <div className="modalOverlay">
            <div className="modalBox">
                <h2>Novo post</h2>
                <button onClick={() => setIsCreating(false)}>
                    <MdClose />
                </button>
                <NewPostForm />
            </div>
        </div>
    )
}
