import styled from "styled-components";

export const Container = styled.div`
    height: 100vh; //100% da tela
    background-color: rgba(15, 15, 15, 0.5);
    backdrop-filter: blur(8px);
    padding: 32px 0;
    position: fixed;
    z-index: 9; //sobrepor
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 80px;
    margin-top: 64px;

`
export const Icon = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`