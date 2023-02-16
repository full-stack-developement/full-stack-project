import styled from "@emotion/styled";
import theme from "../../theme/chakra";

export const ProductCardContainer = styled.div`
  width: 300px;
  height: 340px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 2px 10px;

  .vehicleImg {
    width: 100%;
    height: 142px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${() => theme.greyScale.grey7};
  }

  .vehicleImg:hover {
    border: solid 2px ${() => theme.brand.brand1};

    transform: scale(1.05);
  }

  img {
    width: 90%;
    height: 100%;
  }

  .vehicleTitle {
    width: 100%;
    height: 20px;

    margin: 0;

    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 15px;

    color: ${() => theme.greyScale.grey0};
  }

  .vehicleDescription {
    width: 100%;
    height: 48px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    margin: 0;

    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;

    color: ${() => theme.greyScale.grey2};
  }
`;
