import styled from "styled-components";

export const StyledDiv = styled.div`
    position: relative;
    width: 200px;
    height : 280px;

    @media(${props=>props.theme.mediaQueries.phone}){
        width: 328px;
        height : 395px;
    }

    @media(${props=>props.theme.mediaQueries.tablet}){
        width: 520px;
        height : 326px;
    }

    @media(${props=>props.theme.mediaQueries.desktopSmall}){
        width: 620px;
        height : 326px;
    }

    @media(${props=>props.theme.mediaQueries.desktopLarge}){
        width: 735px;
        height : 326px;
    }
    

    .box__content{
            z-index: 1;
            width: 100%;
            height: 100%;
            padding : 1rem;
            position: absolute;
            display : flex;
            flex-direction : column;
            justify-content : space-around;


            .content_text{
                display: flex;
                flex-direction : column;
                gap : 1rem;
                .text_title{
                    font-family : ${props=>props.theme.font.family.Lexend};
                    font-size : ${props=>props.theme.font["Heading-6-600"].size};
                    font-weight : ${props=>props.theme.font["Heading-6-600"].weight};
                    color : ${props=>props.theme.colors.greyScale.grey10};
                }
                .text_description{
                    font-family: ${props=> props.theme.font.family.Inter};
                    font-size : ${props=>props.theme.font["body-1-400"].size}
                    font-weight : ${props=>props.theme.font["body-1-400"].weight};
                    color : ${props=>props.theme.colors.greyScale.grey5};
                }
            }
        }


`