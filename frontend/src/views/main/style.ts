import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    section {
        margin: 30px;
    }

    section > h1 {
        color: #070f47;
        font-size: 24pt;
    }

    section > small {
        color: #808080;
        font-size: 12pt;
    }

    section > .btn {
        margin-top: 10px;
        background-color: #34cb79;
        box-shadow: 1px 1px 6px #909090;
        border: none;
        padding: 20px;
        border-radius: 5px;
        font-weight: bold;
        color: #fff;
        font-size: 16pt;
        cursor: pointer;
    }

    section > #icon {
        background-color: #21804c;
        height: 100%;
        margin: 5px;
        padding: 5px;
    }

    @media screen and (max-width: 1100px) {
        flex-direction: column;
    }
`
