import { useForm } from "react-hook-form";
import { Input } from "../inputs/Input";
import { InputPassword } from "../inputs/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useUserContext } from "../../../providers/UserContext";
import { useState } from "react";

export const RegisterForm = () => {
  const { registerRequest } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = (formData) => {
    registerRequest(formData, reset, setIsLoading);
  };

  return (
    <div>
      <form
        className="grid grid-lg form__register-gap"
        onSubmit={handleSubmit(submit)}
      >
        <div className="register__input">
          <Input
            type="text"
            placeholder="Nome"
            error={errors.name}
            {...register("name")}
          />
        </div>

        <div className="register__input">
          <Input
            type="email"
            placeholder="E-mail"
            error={errors.email}
            {...register("email")}
          />
        </div>
        <div className="register__input">
          <InputPassword
            placeholder="Senha"
            error={errors.password}
            {...register("password")}
          />
        </div>
        <div className="register__input">
          <InputPassword
            placeholder="Confirmar senha"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />
        </div>
        <button className="btn btn__primary btn__small grid-col-2 btn__register" type="submit" aria-label="register" title="cadastrar-se">
          {isLoading ? <div className="custom-loader"></div> : "Cadastrar-se"}
        </button>
      </form>
    </div>
  );
};
