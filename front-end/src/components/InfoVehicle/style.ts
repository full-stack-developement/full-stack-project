import styled from "@emotion/styled";
import theme from "../../theme/chakra";

export const VehicleInfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  .vehicleInfoDetails {
    width: 100%;

    display: flex;
    flex-direction: row;

    gap: 10px;
  }

  .vehicleDetails {
    width: 51px;
    height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.brand.brand4};
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${(props) => props.theme.colors.brand.brand2};
  }

  .vehiclePrice {
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.colors.greyScale.whiteFixed};
  }
`;
