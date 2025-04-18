import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(153, 105, 105);
`;
export const Form = styled.form`
    display: flex;
    color: slategray;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 3rem;
    background-color: #fff;
    border-radius: 5px;
    max-width: 450px;
    gap: 30px 0px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    h1 {
        font-size: 2rem;
        color: #033;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        color: #666;
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color: #333;
        font-size: 1rem;
        margin-top: 1rem;
    }

    // input
    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    input:focus {
        border-color: #007bff;
        outline: none;
    }
    input::placeholder {
        color: #999;
    }
    input[type="email"] {
        background-color: #f9f9f9;
    }
    input[type="password"] {
        background-color: #f9f9f9;
    }
    input[type="email"]:focus {
        background-color: #fff;
    }
    input[type="password"]:focus {
        background-color: #fff;
    }
    // button
    button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    button:hover {
        background-color: #0056b3;
    }
    button:active {
        background-color: #004085;
    }
    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
    button:disabled:hover {
        background-color: #ccc;
    }
    button:disabled:active {
        background-color: #ccc;
    }
    button:focus {
        outline: none;
    }
    button:focus-visible {
        outline: 2px solid #007bff;
        outline-offset: 2px;
    }
    button:focus-visible:active {
        outline: 2px solid #0056b3;
        outline-offset: 2px;
    }
    button:focus-visible:disabled {
        outline: 2px solid #ccc;
        outline-offset: 2px;
    }
    button:focus-visible:disabled:hover {
        outline: 2px solid #ccc;
        outline-offset: 2px;
    }
    button:focus-visible:disabled:active {
        outline: 2px solid #ccc;
        outline-offset: 2px;
    }
    button:focus-visible:disabled:focus {
        outline: 2px solid #ccc;
        outline-offset: 2px;
    }
`;
