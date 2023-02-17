import styled from "styled-components";

export const StyledDiv = styled.div`
    position: relative;
    display: flex;
    align-items : center;
    justify-content : center;
    width: 100%;
    height: 100%;
    img{
        background-position:center;
        background-size :auto;
    }
    ::before{
        border-radius : 5px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }
`