import { useForm } from "react-hook-form";
import { LoginSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../inputs/Input";
import { InputPassword } from "../inputs/InputPassword";
import { useUserContext } from "../../../providers/UserContext";
import { useState } from "react";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const { loginRequest } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const submit = (formData) => {
    loginRequest(formData, setIsLoading);
  };

  return (
    <div>
      <form className="stack-large" onSubmit={handleSubmit(submit)}>
        <Input
          placeholder="E-mail"
          type={"email"}
          id={"email"}
          error={errors.email}
          {...register("email")}
        />

        <InputPassword
          placeholder="Senha"
          id={"password"}
          error={errors.password}
          {...register("password")}
        />

        <button className="btn__primary btn btn__small flex justify-content-center" type="submit">
          {isLoading ? <div className="custom-loader"></div> : "Entrar"}
        </button>
      </form>
    </div>
  );
};
