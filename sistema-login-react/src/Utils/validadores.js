const validarEmail = (email) => {
    if (typeof email === "string") {
        email = email.trim(); // Remove espaços em branco no início e no final
        // Verifica se o email não está vazio e se contém um formato válido
        return (
            email?.toString().includes("@") && email?.toString().includes(".")
        );
    }
    return email?.toString().includes("@") && email?.toString().includes(".");
};

const validarSenha = (senha) => {
    if (typeof senha !== "string") {
        return "Senha inválida!"; // Retorna mensagem caso não seja uma string
    }

    if (typeof senha === "string") {
        senha = senha.trim(); // Remove espaços em branco no início e no final
        // Verifica se a senha não está vazia e se contém pelo menos 6 caracteres
        return senha.length >= 6;
    }
    return senha.length >= 6;
};

export { validarEmail, validarSenha };
