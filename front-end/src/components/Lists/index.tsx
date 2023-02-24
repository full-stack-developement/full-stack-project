import { chakra, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import ProductCard from "../ProductCard";

interface IAuctionListProps {}

interface ISaleListProps {
  vehicleType: "Carros" | "Motos";
}

export const AuctionList = (props: IAuctionListProps) => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <chakra.section
      position={"relative"}
      mr={"2rem"}
      ml={"2rem"}
      mb={"3rem"}
      className="carousel"
      overflowX="scroll"
      overscroll="auto"
    >
      <Text
        fontFamily="fonts.lexend"
        fontWeight="600"
        fontSize="24px"
        lineHeight="30px"
        marginTop="30px"
        marginBottom="30px"
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
        {announcements.map((announcement) => {
          if (announcement.type == "auction") {
            return (
              <ProductCardAuction
                id={announcement.id}
                coverImage={announcement.coverImage}
                km={announcement.km}
                price={announcement.price}
                title={announcement.title}
                year={announcement.year}
                description={announcement.description}
                key={announcement.id}
              ></ProductCardAuction>
            );
          }
        })}
      </chakra.div>
    </chakra.section>
  );
};

export const SaleList = (props: ISaleListProps) => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <chakra.section
      position={"relative"}
      mr={"2rem"}
      ml={"2rem"}
      className="carousel"
      overflowX="scroll"
      overscroll="auto"
    >
      <Text
        fontFamily="fonts.lexend"
        fontWeight="600"
        fontSize="24px"
        lineHeight="30px"
        marginTop="30px"
        marginBottom="30px"
      >
        {props.vehicleType}
      </Text>
      <chakra.div
        width="fit-content"
        height="400px"
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        gap="15px"
      >
        {props.vehicleType == "Carros" &&
          announcements.map((announcement) => {
            if (
              announcement.vehicleType == "car" &&
              announcement.type == "sale"
            ) {
              return (
                <ProductCard
                  id={announcement.id}
                  coverImage={announcement.coverImage}
                  km={announcement.km}
                  price={announcement.price}
                  title={announcement.title}
                  year={announcement.year}
                  description={announcement.description}
                  key={announcement.id}
                ></ProductCard>
              );
            }
          })}
        {props.vehicleType == "Motos" &&
          announcements.map((announcement) => {
            if (
              announcement.vehicleType == "motorcycle" &&
              announcement.type == "sale"
            ) {
              return (
                <ProductCard
                  id={announcement.id}
                  coverImage={announcement.coverImage}
                  km={announcement.km}
                  price={announcement.price}
                  title={announcement.title}
                  year={announcement.year}
                  description={announcement.description}
                  key={announcement.id}
                ></ProductCard>
              );
            }
          })}
      </chakra.div>
    </chakra.section>
  );
};
