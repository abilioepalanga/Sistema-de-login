import React from "react";
import { InputCustomizado } from "./style";

const Input = ({ nome, ...rest }) => {
    return <InputCustomizado name={nome} {...rest} />;
};

export default Input;
