import styled from "styled-components";

export const StyledDiv = styled.div`
    position: relative;
    width: 280px;
    height : 350px;

    .box__content{
            z-index: 1;
            width: 100%;
            height: 100%;
            position: absolute;
            display : flex;
            flex-direction : column;
            justify-content : flex-end;


            .content{
                padding : 1rem;
                position: relative;
                display: flex;
                flex-direction : column;
                justify-content : space-between;
                gap : 1rem;
                .content_title{
                    font-family : ${props=>props.theme.font.family.Lexend};
                    font-size : ${props=>props.theme.font["Heading-6-600"].size};
                    font-weight : ${props=>props.theme.font["Heading-6-600"].weight};
                    color : ${props=>props.theme.colors.greyScale.grey10};
                }
                .content_description{
                    font-family: ${props=> props.theme.font.family.Inter};
                    font-size : ${props=>props.theme.font["body-1-400"].size};
                    font-weight : ${props=>props.theme.font["body-1-400"].weight};
                    color : ${props=>props.theme.colors.greyScale.grey5};
                }
            }
            .navigation{
                padding : 1rem;
                background-color : ${props=> props.theme.colors.brand.brand1};
                font-family: ${props=> props.theme.font.family.Inter};
                display: flex;
                justify-content : space-between;
                align-items : center;
                .navigation_title{
                    color : ${props=>props.theme.colors.greyScale.whiteFixed};
                    font-weight : ${props=>props.theme.font["body-1-600"].weight};
                }
                .navigation_icon{
                    color : ${props=>props.theme.colors.greyScale.whiteFixed};
                }
            }
        }
`