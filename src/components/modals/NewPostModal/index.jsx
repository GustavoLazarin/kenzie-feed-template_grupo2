import { MdClose } from "react-icons/md"
import { NewPostForm } from "../../forms/NewPostForm"
import { useNewsContext } from "../../../providers/NewsContext"
import { useKeyDown } from "../../../hooks/useKeyDown"
import { useOutClick } from "../../../hooks/useOutClick"

export const NewPostModal = () => {
    const { setIsCreating } = useNewsContext()

    const ref = useOutClick(() => setIsCreating(false))
    useKeyDown("Escape", () => setIsCreating(false))

    return (
        <div ref={ref} className="modalOverlay">
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
