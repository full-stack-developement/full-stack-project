import styled from "styled-components";
import {customTheme} from "../../theme"

export const Footer1 = styled.div`
  background-color: ${() => customTheme.colors.greyScale.grey0};
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: ${() => customTheme.font["body-2-400"].size};
  font-weight: ${() => customTheme.font["body-2-400"].weight};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 45px 59px;
  gap: 10px;

  button {
    background-color: ${() => customTheme.colors.greyScale.grey1};
    color: #ffffff;

    width: 53px;
    height: 50px;
    border-radius: 4px;
  }
`;
