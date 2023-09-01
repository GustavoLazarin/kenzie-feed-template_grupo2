import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("É necessário preencher o campo de nome."),
    email: z.string().email("Insira um endereço de email válido"),
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/,
        "A senha deve conter pelo menos um caractere especial"
      ),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"],
  });
