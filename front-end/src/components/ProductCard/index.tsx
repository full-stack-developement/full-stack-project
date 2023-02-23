import Avatar from "../Avatar";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcement.context";
import InfoVehicle from "../InfoVehicle";
import { Box, Text, Image } from "@chakra-ui/react";

const ProductCard = ({ announcementsData }: any) => {
  const { announcements } = useContext(AnnouncementContext);

  return announcementsData.map((announcement: any, index: any) => (
    <Box
      key={index}
      width="300px"
      height="340px"
      marginTop="10px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      padding="2px 10px"
    >
      <Box
        width="100%"
        height="142px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="greyScale.grey7"
        _hover={{
          border: "solid 2px",
          borderColor: "brand.brand1",
        }}
      >
        <Image
          src={announcement.coverImage}
          alt="A car image"
          width="90%"
          height="100%"
          _hover={{ transform: "scale(1.1)", transition: "650ms" }}
        />
      </Box>
      <Text
        width="100%"
        height="20px"
        margin="0"
        fontFamily="Lexend, sans-serif"
        fontWeight="600"
        fontSize="15px"
        color="greyScale.grey0"
      >
        {announcement.title}
      </Text>
      <Text
        width="100%"
        height="48px"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        margin="0"
        fontFamily="Inter, sans-serif"
        fontWeight="400"
        fontSize="14px"
        color="greyScale.grey2"
      >
        {announcement.description}
      </Text>
      <Avatar colorClass="avatarName-grey" />
      <InfoVehicle colorClass="vehiclePrice-grey" />
    </Box>
  ));
};

export default ProductCard;
