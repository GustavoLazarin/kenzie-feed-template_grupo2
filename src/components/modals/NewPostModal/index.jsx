import { NewPostForm } from "../../forms/NewPostForm"

export const NewPostModal = () => {
    return (
        <div className="modalOverlay">
            <div className="modalBox">
                <NewPostForm />
            </div>
        </div>
    )
}
