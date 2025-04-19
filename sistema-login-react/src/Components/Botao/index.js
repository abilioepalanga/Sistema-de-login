import React from "react";
import { BotaoCustomizado } from "./style";

const Botao = ({ type = "button", texto = "Enviar", onClick }) => {
    return (
        <BotaoCustomizado type={type} onClick={onClick}>
            {texto}
        </BotaoCustomizado>
    );
};

export default Botao;
