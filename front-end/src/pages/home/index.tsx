import { NavBar } from "../../components/NavBar";
import { Text, Button, Flex, chakra, Box } from "@chakra-ui/react";
import {
  AuctionList,
  CarSaleList,
  MotorcycleSaleList,
} from "../../components/Lists";
import { useEffect, useContext } from "react";
import { apiAnnouncement } from "../../api";
import { AnnouncementContext } from "../../contexts/announcement.context";
import Footer from "../../components/Footer";

const Home = () => {
  const { announcements, setAnnouncements } = useContext(AnnouncementContext);

  useEffect(() => {
    apiAnnouncement
      .get("")
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const announcementTypeCar = announcements.filter((announcement, index) => {
    if (announcement.vehicleType === "car") {
      const car = announcement;
      return car;
    }
  });

  const announcementTypeMotorcycle = announcements.filter(
    (announcement, index) => {
      if (announcement.vehicleType === "motorcycle") {
        const motorcycle = announcement;
        return motorcycle;
      }
    }
  );

  return (
    <>
      <NavBar />
      <Flex
        className="header"
        width="100vw"
        height="580px"
        marginBottom="140px"
        bg="brand.brand2"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Flex
          height="300px"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            fontFamily="fonts.lexend"
            color="greyScale.grey10"
            fontSize="44px"
            fontWeight="700"
            lineHeight="55px"
          >
            <Text>Velocidade e experiência em um </Text>
            <Text>{""} lugar feito para você</Text>
          </Flex>
          <Text
            textAlign="center"
            fontFamily="fonts.inter"
            fontWeight="400"
            fontSize="16px"
            color="greyScale.grey9"
            lineHeight="28px"
          >
            Um ambiente feito para você explorar o seu melhor
          </Text>
          <Flex gap="15px">
            <Button
              as="a"
              href="#carSale"
              size="large"
              variant="select-type-vehicle-home"
            >
              Carros
            </Button>
            <Button
              as="a"
              href="#motorcycleSale"
              size="large"
              variant="select-type-vehicle-home"
            >
              Motos
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <chakra.main className="main" margin="0 auto 0 60px" overflow="hidden">
        <AuctionList />
        <Box id="carSale">
          <CarSaleList announcementTypeCar={announcementTypeCar} />
        </Box>
        <Box id="motorcycleSale">
          <MotorcycleSaleList
            announcementTypeMotorcycle={announcementTypeMotorcycle}
          />
        </Box>
      </chakra.main>
      <Footer />
    </>
  );
};

export default Home;
