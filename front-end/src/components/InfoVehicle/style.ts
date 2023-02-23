import styled from "@emotion/styled";
import { customTheme } from "../../theme";

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
    text-align: center; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${customTheme.colors.brand.brand4};
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${customTheme.colors.brand.brand2};
  }

  .vehiclePrice-white {
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${customTheme.colors.greyScale.whiteFixed};
  }

  .vehiclePrice-grey {
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${customTheme.colors.greyScale.grey1};
  }
`;
