import { chakra, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import ProductCard from "../ProductCard";

interface IListTypeProps {
  announcementType: string;
}

export const AuctionList = (props: IListTypeProps) => {
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
        {props.announcementType}
      </Text>
      <chakra.div
        width="fit-content"
        height="400px"
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        gap="15px"
      >
        <ProductCardAuction announcements={announcements} />
      </chakra.div>
    </chakra.section>
  );
};

export const SaleList = (props: IListTypeProps) => {
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
        {props.announcementType}
      </Text>
      <chakra.div
        width="fit-content"
        height="400px"
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        gap="15px"
      >
        <ProductCard announcementsData={announcements} />
      </chakra.div>
    </chakra.section>
  );
};
