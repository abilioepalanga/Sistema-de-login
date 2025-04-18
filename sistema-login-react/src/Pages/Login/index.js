import React from "react";
import { Container, Form } from "./style";

const Login = () => {
    return (
        <Container>
            <Form>
                <h1>Faça o seu Login Page</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
                <p>
                    Não tem uma conta? <a href="/register">Registrar</a>
                </p>
                <p>
                    Esqueci minha senha <a href="/forgot-password">Recuperar</a>
                </p>
                <p>
                    Voltar para <a href="/">Home</a>
                </p>
            </Form>
        </Container>
    );
};
export default Login;
