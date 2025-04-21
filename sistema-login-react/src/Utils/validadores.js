// Valida se o nome de utilizador é válido
const validarUsername = (username) => {
    if (typeof username !== "string") return false;

    username = username.trim();

    // Deve ter pelo menos 3 caracteres
    return username.length >= 3;
};

// Valida se a senha é válida
const validarSenha = (senha) => {
    if (typeof senha !== "string") return false;

    senha = senha.trim();

    // Deve ter pelo menos 6 caracteres
    return senha.length >= 6;
};

export { validarUsername, validarSenha };
