import React from "react";
import { Container, Form } from "./style";
import Input from "../../Components/Input";
import Botao from "../../Components/Botao";

const Login = () => {
    const handleChange = (event) => {
        console.log("Digitando...", event.target.name, event.target.value);
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
                />
                <Input
                    nome="password"
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    required
                />
                <Botao />

                <div>
                    <p>Não tem uma conta?</p>
                    <a href="#">Cadastre-se</a>
                </div>
            </Form>
        </Container>
    );
};
export default Login;
