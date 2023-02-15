import styled from "@emotion/styled";
import theme from "../../theme";

export const ProductCardContainer = styled.div`
  height: 391px;
  width: 315px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  padding: 2px 10px;

  .vehicleImg {
    width: 312px;
    height: 152px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${() => theme.greyScale.grey7};
  }

  img {
    width: 260px;
    height: 150px;
  }

  .vehicleTitle {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 16px;

    color: ${() => theme.greyScale.grey0};
  }

  .vehicleDescription {
    width: 100%;
    height: 30px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;

    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;

    color: ${() => theme.greyScale.grey2};
  }

  .vehicleAvatar {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;

    color: ${() => theme.greyScale.grey2};
  }

  .vehicleInfo {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

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

    background: ${() => theme.brand.brand4};
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;

    color: ${() => theme.brand.brand2};
  }

  .vehiclePrice {
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    font-size: 16px;

    color: ${() => theme.greyScale.grey0};
  }
`;
