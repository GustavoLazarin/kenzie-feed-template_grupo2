import { Input } from "../inputs/Input";
import { InputPassword } from "../inputs/InputPassword";

export const RegisterForm = () => {
    return (
        <div>
            <form>
                <div>
                    <Input type="text" placeholder="Nome"/>
                    <Input type="email" placeholder="E-mail"/>
                </div>
                <div>
                    <InputPassword placeholder="Senha"/>
                    <InputPassword placeholder="Confirmar senha"/>
                </div>
                <button type="submit">Cadastrar-se</button>
            </form>
        </div>
    );
};