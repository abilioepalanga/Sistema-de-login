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
`;
