import React from "react";
import { BotaoCustomizado } from "./style";

const Botao = ({ type = "button", texto = "Enviar", onClick, disabled }) => {
    return (
        <BotaoCustomizado type={type} onClick={onClick} disabled={disabled}>
            {texto}
        </BotaoCustomizado>
    );
};

export default Botao;
