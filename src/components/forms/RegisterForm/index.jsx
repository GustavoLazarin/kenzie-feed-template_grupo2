import { useForm } from "react-hook-form";
import { Input } from "../inputs/Input";
import { InputPassword } from "../inputs/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useUserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {

  const { registerRequest } = useUserContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = (formData) => {
    registerRequest(formData, reset);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Input
            type="text"
            placeholder="Nome"
            error={errors.name}
            {...register("name")}
          />
          <Input
            type="email"
            placeholder="E-mail"
            error={errors.email}
            {...register("email")}
          />
        </div>
        <div>
          <InputPassword
            placeholder="Senha"
            error={errors.password}
            {...register("password")}
          />
          <InputPassword
            placeholder="Confirmar senha"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />
        </div>
        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
  );
};
