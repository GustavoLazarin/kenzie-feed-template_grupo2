import { useForm } from "react-hook-form";
import { LoginSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../inputs/Input";
import { InputPassword } from "../inputs/InputPassword";

export const LoginForm = (submit) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(LoginSchema),
    })

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          placeholder={"E-mail"}
          type={"email"}
          id={"email"}
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <InputPassword
          placeholder={"Senha"}
          id={"password"}
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
