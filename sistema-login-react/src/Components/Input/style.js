import styled from "styled-components";
export const InputCustomizado = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 1rem;
    background-color: rgb(249, 249, 249);
    color: #333;
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &::placeholder {
        color: #999;
    }
`;
