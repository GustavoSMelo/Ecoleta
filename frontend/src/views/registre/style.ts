import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #fff;
    flex-direction: column;
    width: 60%;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #bcbcbc;


    h1,
    h2 {
        color: #070f47;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-right: 20px;
        margin-left: 20px;
    }

    input {
        border: none;
        padding: 15px;
        font-size: 16pt;
        margin-top: 30px;
        border-radius: 5px;
        box-shadow: 1px 1px 4px #707070;
        margin-left: 5px;
        margin-right: 5px;
    }

    input:focus {
        box-shadow: 1px 1px 6px #909090;
        border: none;
    }

    section {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    select {
        padding: 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 4px #707070;
        font-size: 16pt;
        margin:10px;

    }

    small {
        color: #707070;
        margin: 10px;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
    }

    li {
        margin: 5px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        padding: 30px;
        transition: 0.5s;
    }
    figure{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .selected {
        border: solid 3px #34cb79;
        background-color: #68cb7955;
        transition: 0.5;
        transition: 0.5s;
    }

    .map {
        width: 95%;
        height: 350px;
        margin: 10px;
    }

    button{
        background-color: #34cb79;
        color: #fff;
        font-size: 16pt;
        font-weight: bold;
        cursor: pointer;
        padding: 15px;
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 4px #909090;
        align-items: center;
    }

    @media screen and (max-width: 860px) {
        flex-direction: column;

        select {
            margin: 10px;
        }

        ul {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const ContainerSucess = styled.article`
    background-color: #68cb7955;
    border: #34cb79 solid 3px;
    padding: 15px;
    font-size: 16pt;
    color: #34cb79;
    text-align: center;
    display: flex;
    flex-direction:column;
    margin: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const ContainerError = styled.article`
background-color: #D1392D55;
    border: #D1392D solid 3px;
    padding: 15px;
    font-size: 16pt;
    color: #D1392D;
    text-align: center;
    display: flex;
    flex-direction:column;
    margin: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;
