import { z } from "zod";

export const EditSchema = z.object({
  title: z.string().nonempty("Título é obrigatório"),
  image: z.string().nonempty("Imagem é obrigatória"),
  description: z.string().nonempty("Descrição é obrigatória"),
});
