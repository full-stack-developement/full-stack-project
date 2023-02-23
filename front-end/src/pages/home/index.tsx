import { NavBar } from "../../components/NavBar";
import { Text, Button, Flex, chakra, Box } from "@chakra-ui/react";
import { AuctionList, SaleList } from "../../components/Lists";

const Home = () => {
  return (
    <>
      <NavBar />
      <Flex
        className="header"
        width="100vw"
        height="500px"
        marginBottom="100px"
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
            <Button size="large" variant="select-type-vehicle-home">
              Carros
            </Button>
            <Button size="large" variant="select-type-vehicle-home">
              Motos
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <chakra.main className="main" margin="0 auto 0 60px" overflow="hidden">
        <AuctionList announcementType="Leilão" />
        <SaleList announcementType="Carros" />
        <SaleList announcementType="Motos" />
      </chakra.main>
    </>
  );
};

export default Home;
