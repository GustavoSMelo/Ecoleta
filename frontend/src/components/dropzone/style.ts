import styled from 'styled-components'

export const Container = styled.main`
    padding: 30px;
    background-color: #909090;
    color: #606060;
    border: solid 3px #606060;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    flex-direction: column;

    div{
        cursor: pointer;
    }

    div, input, img{
        width: 100%;
        height: 100%;
    }
`
