import styled from "styled-components";
import theme from "../../theme";

export const Footer1 = styled.div`
  background-color: ${() => theme.greyScale.grey0};
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: ${() => theme.font["body-2-400"].size};
  font-weight: ${() => theme.font["body-2-400"].weigth};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 45px 59px;
  gap: 10px;

  button {
    background-color: ${() => theme.greyScale.grey1};
    color: #ffffff;

    width: 53px;
    height: 50px;
    border-radius: 4px;
  }
`;
