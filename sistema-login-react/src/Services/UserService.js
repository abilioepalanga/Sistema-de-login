import axios from "axios";

export default class UserServices {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN, // URL base da API
        });
    }

    async login(dados) {
        const { data } = await this.api.post("/login", dados); // Envia os dados para a API de login
        //        return data; // Retorna os dados recebidos da API

        if (data) {
            localStorage.setItem("token", data.token); // Armazena o token no localStorage
            localStorage.setItem("nome", data.firstName); // Armazena o nome no localStorage
            localStorage.setItem("email", data.email); // Armazena o email no localStorage
            return true; // Retorna true se o login for bem-sucedido
        }
        return false; // Retorna false se o login falhar
    }
}
