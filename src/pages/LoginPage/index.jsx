import { Footer } from "../../components/Footer";
import { Header } from "../../components/header";
import loginImg from "../../assets/loginImg.svg";
import { Input } from "../../components/forms/inputs/Input";
import { InputPassword } from "../../components/forms/inputs/InputPassword";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  
  const {loginRequest} = useUserContext();

  const submit = (formData) => {
    loginRequest(formData);
  };

  return (
    <div>
      <Header />
      <section>
        <div>
          <img src={loginImg} alt="Imagem de login" />
        </div>
        <div>
          <div>
            <h1>Acesse o KenzieFeed</h1>
            <p>Preencha os campos corretamente para fazer login</p>
          </div>

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

          <div>
            <h3>Não é cadastrado?</h3>
            <Link to="/register">
              <button>Cadastre-se</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
