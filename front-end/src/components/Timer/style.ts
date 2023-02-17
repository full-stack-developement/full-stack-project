import styled from "styled-components";

export const StyledDiv = styled.div`
    margin:1rem;
    z-index : 1;
    top : 10px;
    border-radius: 50px;
    position : absolute;
    padding:0.1rem 0.5rem;
    display:flex;
    align-items : center;
    justify-content : center;
    gap : 0.1rem;
    background-color : ${props=> props.theme.colors.greyScale.grey10};
    
    svg{
        fill : ${props=> props.theme.colors.brand.brand1}
    }

    @media(${props=>props.theme.mediaQueries.phone}){
            gap : 0.5rem;
        }

`
export const StyledP = styled.p`
    font-family : ${props=>props.theme.font.family.Lexend};
    font-size : ${props=> props.theme.font["body-2-400"].size};
    font-weight : ${props=>props.theme.font["body-2-400"].weight};
    color : ${props=> props.theme.colors.greyScale.grey1};

    @media(min-width:340px){
            p{
                font-size : ${props=> props.theme.font["Heading-7-500"].size};
                font-weight : ${props=>props.theme.font["Heading-7-500"].weight};
            }

        }

`