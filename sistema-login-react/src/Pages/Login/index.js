import React from "react";
import { Container, Form } from "./style";
import Input from "../../Components/Input";
import Botao from "../../Components/Botao";

const Login = () => {
    return (
        <Container>
            <Form>
                <h1>Faça o seu Login Page</h1>
                <Input />
                <Input />
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
