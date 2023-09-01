import { useForm } from "react-hook-form"
import { Input } from "../inputs/Input"
import { TextArea } from "../inputs/TextArea"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditSchema } from "./editSchema"
import { useNewsContext } from "../../../providers/NewsContext"
import { useNavigate } from "react-router-dom"

export const EditForm = () => {
    const { editingPost, editPost } = useNewsContext()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(EditSchema),
        values: {
            title: editingPost.title,
            image: editingPost.image,
            description: editingPost.description,
        },
    })

    const submit = (formData) => {
        const objPost = {
            title: formData.title,
            description: formData.description,
            owner: editingPost.owner,
            userId: editingPost.userId,
            image: formData.image,
        }
        editPost(objPost)
        navigate("/dashboard")
    }

    return (
        <>
            <form className="stack-medium grid" onSubmit={handleSubmit(submit)}>
                <Input
                    label={"Título"}
                    type={"text"}
                    id={"title"}
                    error={errors.title}
                    {...register("title")}
                />
                <Input
                    label={"Imagem em destaque"}
                    type={"text"}
                    id={"image"}
                    error={errors.image}
                    {...register("image")}
                />
                <TextArea
                    label={"Conteúdo"}
                    id={"description"}
                    error={errors.description}
                    {...register("description")}
                />
                <button
                    className="btn__primary btn btn-max-width justify-self-end btn__small"
                    type="submit"
                >
                    Salvar post
                </button>
            </form>
        </>
    )
}
