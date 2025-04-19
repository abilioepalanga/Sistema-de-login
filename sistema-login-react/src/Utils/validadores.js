const validarEmail = (email) => {
    email = email.trim(); // Remove espaços em branco no início e no final
    // Verifica se o email não está vazio e se contém um formato válido
    email?.toString().includes("@") && email?.toString().includes(".");
};

const validarSenha = (senha) => {
    senha = senha.trim(); // Remove espaços em branco no início e no final
    // Verifica se a senha não está vazia e se contém pelo menos 6 caracteres
    return senha.length >= 6;
};

export { validarEmail, validarSenha };
