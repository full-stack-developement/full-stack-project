import { chakra, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import ProductCard from "../ProductCard";

export const AuctionList = () => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <chakra.section
      className="carousel"
      overflowX="scroll"
      overscroll="auto"
      marginBottom="100px"
    >
      <Text
        fontFamily="fonts.lexend"
        fontWeight="600"
        fontSize="24px"
        lineHeight="30px"
        marginTop="30px"
        marginBottom="60px"
      >
        Leilão
      </Text>
      <chakra.div
        width="fit-content"
        height="400px"
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        gap="25px"
      >
        <ProductCardAuction announcements={announcements} />
      </chakra.div>
    </chakra.section>
  );
};

export const CarSaleList = ({ announcementTypeCar }: any) => {
  return (
    <chakra.section
      className="carsList"
      overflowX="scroll"
      overscroll="auto"
      marginBottom="100px"
    >
      <Text
        fontFamily="fonts.lexend"
        fontWeight="600"
        fontSize="24px"
        lineHeight="30px"
        marginTop="30px"
        marginBottom="60px"
      >
        Carros
      </Text>
      <chakra.div
        width="fit-content"
        height="400px"
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        gap="15px"
      >
        <ProductCard announcementsData={announcementTypeCar} />
      </chakra.div>
    </chakra.section>
  );
};

export const MotorcycleSaleList = ({ announcementTypeMotorcycle }: any) => {
  return (
    <chakra.section
      className="motorcyclesList"
      overflowX="scroll"
      overscroll="auto"
      marginBottom="100px"
    >
      <Text
        fontFamily="fonts.lexend"
        fontWeight="600"
        fontSize="24px"
        lineHeight="30px"
        marginTop="30px"
        marginBottom="60px"
      >
        Motos
      </Text>
      <chakra.div
        width="fit-content"
        height="400px"
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        gap="15px"
      >
        <ProductCard announcementsData={announcementTypeMotorcycle} />
      </chakra.div>
    </chakra.section>
  );
};
