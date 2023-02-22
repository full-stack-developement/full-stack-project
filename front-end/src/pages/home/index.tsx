import { NavBar } from "../../components/NavBar";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import { Box, Text, Button, Flex, chakra } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <NavBar />
      <Flex
        className="header"
        width="100vw"
        height="500px"
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
      <chakra.section className="carousel">
        <Text
          fontFamily="fonts.lexend"
          fontWeight="600"
          fontSize="24px"
          lineHeight="30px"
        >
          Leilão
        </Text>
      </chakra.section>
      <chakra.section className="cars">
        <Text
          fontFamily="fonts.lexend"
          fontWeight="600"
          fontSize="24px"
          lineHeight="30px"
        >
          Carros
        </Text>
      </chakra.section>
      <chakra.section className="motorcycle">
        <Text
          fontFamily="fonts.lexend"
          fontWeight="600"
          fontSize="24px"
          lineHeight="30px"
        >
          Motos
        </Text>
      </chakra.section>
    </>
  );
};

export default Home;
