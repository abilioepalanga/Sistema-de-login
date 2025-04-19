import styled from "styled-components";

export const BotaoCustomizado = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 1rem;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &:active {
        background-color: #004085;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
