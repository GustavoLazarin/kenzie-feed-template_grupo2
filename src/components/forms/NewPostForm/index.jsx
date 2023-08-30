import { useForm } from "react-hook-form"
import { Input } from "../inputs/Input"
import { TextArea } from "../inputs/TextArea"
import { zodResolver } from "@hookform/resolvers/zod"
import { NewPostFormSchema } from "./NewPostFormSchema"
import { useNewsContext } from "../../../providers/NewsContext"

export const NewPostForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(NewPostFormSchema),
    })

    const { createPost } = useNewsContext()

    const submit = (formData) => {
        createPost(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                placeholder="Título"
                {...register("title")}
                error={errors.title}
            />
            <Input
                placeholder="Imagem em destaque"
                {...register("image")}
                error={errors.image}
            />
            <TextArea
                placeholder="Conteúdo do post"
                {...register("description")}
                error={errors.description}
            />
            <button type="submit">Criar post</button>
        </form>
    )
}