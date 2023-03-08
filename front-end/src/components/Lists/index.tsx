import { Box, chakra, IconButton, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import ProductCard from "../ProductCard";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

interface IAuctionListProps {}

interface ISaleListProps {
  vehicleType: "Carros" | "Motos";
}

export const AuctionList = (props: IAuctionListProps) => {
  const { announcements } = useContext(AnnouncementContext);

  function scrollLeft() {
    const left = document.querySelector(".carouselAuctionCardsContainer");
    left?.scrollBy(-700, 0);
  }

  function scrollRight() {
    const right = document.querySelector(".carouselAuctionCardsContainer");
    right?.scrollBy(700, 0);
  }

  return (
    <>
      {announcements.filter((el) => el.announcementType == "auction").length >
        0 && (
        <chakra.section
          className="carousel"
          position={"relative"}
          mr={"2rem"}
          ml={"2rem"}
          mb={"3rem"}
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

          <Box
            className="carouselAuctionContainer"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Left Icon */}
            <IconButton
              marginRight={"10px"}
              aria-label="left-arrow"
              variant="select-type-announcement:disabled"
              borderRadius="full"
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => scrollLeft()}
            >
              <BiLeftArrowAlt />
            </IconButton>

            <chakra.div
              className="carouselAuctionCardsContainer"
              maxWidth="fit-content"
              height="400px"
              display="flex"
              flexDirection="row"
              flexWrap="nowrap"
              overflowX={"hidden"}
              gap="25px"
              cursor={"pointer"}
            >
              {announcements.map((announcement) => {
                if (announcement.announcementType == "auction") {
                  return (
                    <ProductCardAuction
                      user={announcement.user}
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

            {/* Right Icon */}
            <IconButton
              marginLeft={"10px"}
              aria-label="right-arrow"
              variant="select-type-announcement:disabled"
              borderRadius="full"
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => scrollRight()}
            >
              <BiRightArrowAlt />
            </IconButton>
          </Box>
        </chakra.section>
      )}
    </>
  );
};

export const SaleList = (props: ISaleListProps) => {
  const { announcements } = useContext(AnnouncementContext);

  function scrollLeftCar() {
    const leftCar = document.querySelector(".carouselSaleCars");
    leftCar?.scrollBy(-350, 0);
  }

  function scrollRightCar() {
    const right = document.querySelector(".carouselSaleCars");
    right?.scrollBy(350, 0);
  }

  function scrollLeftMotorcycle() {
    const leftMotorcycle = document.querySelector(".carouselSaleMotorcycle");
    leftMotorcycle?.scrollBy(-350, 0);
  }

  function scrollRightMotorcycle() {
    const right = document.querySelector(".carouselSaleMotorcycle");
    right?.scrollBy(350, 0);
  }

  return (
    <>
      {announcements.filter(
        (el) =>
          el.announcementType == "sale" &&
          el.vehicleType == "car" &&
          props.vehicleType == "Carros"
      ).length > 0 && (
        <chakra.section
          position={"relative"}
          mr={"2rem"}
          ml={"2rem"}
          className="carousel"
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

          <Box
            className="carouselSaleContainer"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Left Icon */}
            <IconButton
              marginRight={"10px"}
              aria-label="left-arrow"
              variant="select-type-announcement:disabled"
              borderRadius="full"
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => scrollLeftCar()}
            >
              <BiLeftArrowAlt />
            </IconButton>

            <chakra.div
              className="carouselSaleCars"
              width="fit-content"
              height="100%"
              display="flex"
              flexDirection="row"
              flexWrap="nowrap"
              overflowX="hidden"
              gap="15px"
            >
              {announcements.map((announcement) => {
                if (
                  announcement.vehicleType == "car" &&
                  announcement.announcementType == "sale"
                ) {
                  return (
                    <ProductCard
                      user={announcement.user}
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

            {/* Right Icon */}
            <IconButton
              marginLeft={"10px"}
              aria-label="right-arrow"
              variant="select-type-announcement:disabled"
              borderRadius="full"
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => scrollRightCar()}
            >
              <BiRightArrowAlt />
            </IconButton>
          </Box>
        </chakra.section>
      )}

      {announcements.filter(
        (el) =>
          el.announcementType == "sale" &&
          el.vehicleType == "motorcycle" &&
          props.vehicleType == "Motos"
      ).length > 0 && (
        <chakra.section
          position={"relative"}
          mr={"2rem"}
          ml={"2rem"}
          className="carousel"
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

          <Box
            className="carouselSaleContainer"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Left Icon */}
            <IconButton
              marginRight={"10px"}
              aria-label="left-arrow"
              variant="select-type-announcement:disabled"
              borderRadius="full"
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => scrollLeftMotorcycle()}
            >
              <BiLeftArrowAlt />
            </IconButton>

            <chakra.div
              className="carouselSaleMotorcycle"
              width="fit-content"
              height="100%"
              display="flex"
              flexDirection="row"
              flexWrap="nowrap"
              overflowX="hidden"
              gap="15px"
            >
              {announcements.map((announcement) => {
                if (
                  announcement.vehicleType == "motorcycle" &&
                  announcement.announcementType == "sale"
                ) {
                  return (
                    <ProductCard
                      user={announcement.user}
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

            {/* Right Icon */}
            <IconButton
              marginLeft={"10px"}
              aria-label="right-arrow"
              variant="select-type-announcement:disabled"
              borderRadius="full"
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => scrollRightMotorcycle()}
            >
              <BiRightArrowAlt />
            </IconButton>
          </Box>
        </chakra.section>
      )}
    </>
  );
};
