import React from "react";
import { Container, Form } from "./style";
import Input from "../../Components/Input";
import Botao from "../../Components/Botao";

const Login = () => {
    const handleChange = (event) => {
        console.log("Digitando...", event.target.name, event.target.value);
    };

    const handleSubmit = async () => {
        try {
            alert("Formulário enviado!");
        } catch (err) {
            alert("Erro ao fazer login" + err);
        }
    };

    return (
        <Container>
            <Form>
                <h1>Faça o seu Login Page</h1>
                <Input
                    nome="email"
                    type="email"
                    placeholder="Digite seu email"
                    onChange={handleChange}
                    required
                />
                <Input
                    nome="password"
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    required
                />
                <Botao type="submit" texto="Entrar" onClick={handleSubmit} />

                <div>
                    <p>Não tem uma conta?</p>
                    <a href="#">Cadastre-se</a>
                </div>
            </Form>
        </Container>
    );
};
export default Login;
