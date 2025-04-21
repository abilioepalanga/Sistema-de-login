import React, { useState } from "react";
import { Container, Form } from "./style";
import Input from "../../Components/Input";
import Botao from "../../Components/Botao";
import { validarUsername, validarSenha } from "../../Utils/validadores";

import UserServices from "../../Services/UserService"; // Importa o serviço de usuário

// Importa os componentes de estilo
const userService = new UserServices(); // Instancia o serviço de usuário

const Login = () => {
    // Componente funcional para a página de login
    const [loading, setLoading] = useState();
    const [form, setForm] = useState([]);

    const handleChange = (event) => {
        // Função para lidar com a mudança nos campos de entrada
        console.log("Digitando...", event.target.name, event.target.value);
        setForm({ ...form, [event.target.name]: event.target.value }); // Atualiza o estado do formulário com o valor digitado
        console.log("Formulário atualizado:", form);
    };

    const handleSubmit = async (event) => {
        // Função para lidar com o envio do formulário
        event.preventDefault(); // Previne o comportamento padrão do formulário
        try {
            setLoading(true);
            const response = await userService.login(form); // Chama o serviço de login com os dados do formulário
            if (response) {
                console.log("Login realizado com sucesso!", response);
                alert("Login realizado com sucesso!");
                // Redireciona para a página inicial ou outra página após o login
            }

            setLoading(false);
        } catch (err) {
            alert("Erro ao fazer login" + err);
        }
    };

    const ValidadorInput = () => {
        return validarUsername(form.username) && validarSenha(form.password);
    };

    console.log("Form está válido :", ValidadorInput());

    return (
        <Container>
            <Form>
                <h1>Faça o seu Login Page</h1>
                <Input
                    nome="username"
                    type="text"
                    placeholder="Digite seu nome de usuário"
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
                <Botao
                    type="submit"
                    texto="Entrar"
                    onClick={handleSubmit}
                    disabled={loading === true || !ValidadorInput()}
                />

                <div>
                    <p>Não tem uma conta?</p>
                    <a href="#">Cadastre-se</a>
                </div>
            </Form>
        </Container>
    );
};
export default Login;
