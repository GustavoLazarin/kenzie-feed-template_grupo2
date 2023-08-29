import { useForm } from "react-hook-form";
import { LoginSchema } from "./LoginSchema";

export const LoginForm = (submit) => {
    const {register,
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
          type={email}
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
