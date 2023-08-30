import { useForm } from "react-hook-form"
import { Input } from "../inputs/Input"
import { TextArea } from "../inputs/TextArea"

export const NewPostForm = () => {
    const { handleSubmit, register } = useForm({
        mode: "onChange",
    })

    return (
        <form>
            <Input placeholder="Título" {...register("title")} />
            <Input placeholder="Imagem em destaque" {...register("image")} />
            <TextArea
                placeholder="Conteúdo do post"
                {...register("description")}
            />
        </form>
    )
}
