import React, { useState } from "react";
import { Container, Form } from "./style";
import Input from "../../Components/Input";
import Botao from "../../Components/Botao";
import { validarEmail, validarSenha } from "../../Utils/validadores";

const Login = () => {
    const [loading, setLoading] = useState();
    const [form, setForm] = useState([]);

    const handleChange = (event) => {
        console.log("Digitando...", event.target.name, event.target.value);
        setForm({ ...form, [event.target.name]: event.target.value }); // Atualiza o estado do formulário com o valor digitado
        console.log("Formulário atualizado:", form);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        try {
            setLoading(true);
            alert("Formulário enviado!");
            setLoading(false);
        } catch (err) {
            alert("Erro ao fazer login" + err);
        }
    };

    const ValidadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password);
    };

    console.log("Form está válido :", ValidadorInput());

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
