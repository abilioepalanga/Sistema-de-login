import styled from "styled-components";

export const BotaoCustomizado = styled.button`
    width: 100%;
    padding: 18px 22px; /* Aumentado */
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    background-color: #007bff;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        background-color: rgb(14, 108, 209);
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
    }

    &:active {
        background-color: #004085;
        box-shadow: 0 2px 8px rgba(0, 123, 255, 0.25);
    }

    &:disabled {
        background-color: #d0d0d0;
        color: #666;
        cursor: not-allowed;
    }
`;
