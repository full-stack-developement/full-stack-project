import styled, { css } from "styled-components";
import { IAvatarProps } from ".";
import { customTheme } from "../../theme";

export const AvatarStyled = styled.div<IAvatarProps>`


  display: flex;
  width: max-content;
  flex-direction: ${props=>props.size == "big" ? "column" : "row"};
  align-items:  center;
  gap: 5px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;

  .avatarLetter {
    width:${props=> props.size == "big" ? "104px" : "32px"};
    height:${props=> props.size == "big" ? "104px" : "32px"};
    display: flex;
    ${props=> props.size == "big" &&
    css`
      font-size: 3rem;
    `}
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${customTheme.colors.brand.brand2};
    border-radius: 150px;
    color: ${customTheme.colors.greyScale.whiteFixed};
  }
  ${props=> props.size == "big" &&
  css`
    span{
      margin-top: 1rem;
      font-family: ${customTheme.fonts.lexend};
      color : ${customTheme.colors.greyScale.grey1};
      font-size: ${customTheme.fontSizes["Heading-6-600"].size};
      font-weight: ${customTheme.fontWeights["Heading-6-600"].weight};
    }
  `}
  ${props=> props.size != "big" && 
  css`
    .avatarName-grey {
    text-align: center;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${customTheme.colors.greyScale.grey2};
  }

  .avatarName-white {
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${customTheme.colors.greyScale.whiteFixed};
  }
  `}
`
