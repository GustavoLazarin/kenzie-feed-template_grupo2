import { useForm } from "react-hook-form";
import { LoginSchema } from "./LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../inputs/Input";
import { InputPassword } from "../inputs/InputPassword";
import { useUserContext } from "../../../providers/UserContext";
import { useState, useEffect } from "react";



export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  
  const { loginRequest } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  
  const submit = (formData) => {
    loginRequest(formData, setIsLoading);
  };
  
  useEffect(() => {
    setFocus("email");
  }, []);

  
  return (
    <div>
      <form className="stack-large" onSubmit={handleSubmit(submit)}>
        <Input
          placeholder="E-mail"
          type={"email"}
          id={"email"}
          {...register("email")}
          error={errors.email}
          // {...emailRegister}

        />

        <InputPassword
          placeholder="Senha"
          id={"password"}
          error={errors.password}
          {...register("password")}
        />

        <button
          className="content btn__primary btn btn__small flex justify-content-center"
          type="submit"
        >
          {isLoading ? <div className="custom-loader"></div> : "Entrar"}
        </button>
      </form>
    </div>
  );
};
