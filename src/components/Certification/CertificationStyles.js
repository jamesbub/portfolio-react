import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 24px 0 40px;

    @media ${props => props.theme.breakpoints.md}{
        gap: 16px;
        margin: 20px 0 32px;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    @media ${props => props.theme.breakpoints.sm}{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        max-width: 500px;
        margin: 24px auto;
    }
`

export const Cert = styled.div`
    background:${props => props.bgColor?props.bgColor:'#212D45'};
    border-radius: 12px;
    height: 300px;
    padding: 24px;
    display: flex;
    justify-content: center;
    @media ${props => props.theme.breakpoints.lg} {
    height: 300px;

    }

    @media ${props => props.theme.breakpoints.md} {
    height: 290px;
    padding: 16px;
    }

    @media ${props => props.theme.breakpoints.sm} {
    height: 280px;
    padding: 12px;

    &:nth-child(2n){
        grid-row:2;
    }
    }
`