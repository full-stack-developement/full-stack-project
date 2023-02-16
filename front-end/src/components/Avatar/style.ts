import styled from "@emotion/styled";
import theme from "../../theme";

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 5px;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;

  .avatarLetter {
    width: 32px;
    height: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${() => theme.colors.brand.brand2};
    border-radius: 150px;

    color: ${() => theme.colors.greyScale.whiteFixed};
  }

  .avatarType {
    height: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${() => theme.colors.greyScale.grey2};
  }
`;