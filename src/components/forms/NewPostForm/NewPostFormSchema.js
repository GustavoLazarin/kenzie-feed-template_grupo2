import { z } from "zod";

export const NewPostFormSchema = z.object({
  title: z.string().nonempty("Título é obrigatório"),
  image: z.string().nonempty("Imagem é obrigatória"),
  description: z.string().nonempty("Conteúdo é obrigatório"),
});
