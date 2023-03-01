import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import { customTheme } from "../../theme";

export const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <form className="registerForm" action="">
        <Box
          className="registerFormContainer"
          width={"420px"}
          margin={"40px auto"}
          bg={customTheme.colors.greyScale.grey8}
          padding={"15px"}
        >
          <Flex
            className="registerPersonalData"
            width={"85%"}
            display={"flex"}
            margin={"0 auto"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"flex-start"}
            gap={"15px"}
          >
            <Text fontFamily={customTheme.fonts.lexend} variant={"forms-title"}>
              Cadastro
            </Text>
            <Text
              fontFamily={customTheme.fonts.inter}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"24px"}
              color={customTheme.colors.greyScale.grey0}
            >
              Informações pessoais
            </Text>

            <FormControl id="name" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                type={"text"}
                placeholder="Ex: Jhon Doe"
                variant={"forms-input"}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                placeholder="Ex: jhondoe@kenzie.com.br"
                variant={"forms-input"}
              />
            </FormControl>

            <FormControl id="socialSecurityNumber" isRequired>
              <FormLabel>CPF</FormLabel>
              <Input
                type={"number"}
                placeholder="000.000.000-00"
                variant={"forms-input"}
              />
            </FormControl>

            <FormControl id="cellphone">
              <FormLabel>Celular</FormLabel>
              <Input
                type={"tel"}
                placeholder="(DDD)90000-0000"
                variant={"forms-input"}
              />
            </FormControl>

            <FormControl id="birthdate" isRequired>
              <FormLabel>Data de nascimento</FormLabel>
              <Input
                type={"date"}
                placeholder="00/00/00"
                variant={"forms-input"}
              />
            </FormControl>

            <FormControl id="description">
              <FormLabel>Descrição</FormLabel>
              <Input
                type={"text"}
                placeholder="Digitar descrição"
                variant={"forms-input"}
              />
            </FormControl>
          </Flex>

          <Flex
            className="registerAddressData"
            width={"85%"}
            display={"flex"}
            margin={"2rem auto"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"flex-start"}
            gap={"15px"}
          >
            <Text
              fontFamily={customTheme.fonts.inter}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"24px"}
              color={customTheme.colors.greyScale.grey0}
            >
              Informações de endereço
            </Text>

            <FormControl id="cep" isRequired>
              <FormLabel>CEP</FormLabel>
              <Input
                type={"number"}
                placeholder={"00000-000"}
                variant={"forms-input"}
              ></Input>
            </FormControl>

            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="location" isRequired>
                    <FormLabel>Estado</FormLabel>
                    <Input
                      type={"text"}
                      placeholder={"Digitar estado"}
                      variant={"forms-input"}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city" isRequired>
                    <FormLabel>Cidade</FormLabel>
                    <Input
                      type={"text"}
                      placeholder={"Digitar cidade"}
                      variant={"forms-input"}
                    />
                  </FormControl>
                </Box>
              </HStack>
            </Stack>

            <FormControl id="street">
              <FormLabel>Rua</FormLabel>
              <Input
                type={"text"}
                placeholder="Digitar rua"
                variant={"forms-input"}
              />
            </FormControl>

            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="complements" isRequired>
                    <FormLabel>Número</FormLabel>
                    <Input
                      type={"number"}
                      placeholder={"Digitar número"}
                      variant={"forms-input"}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city" isRequired>
                    <FormLabel>Complemento</FormLabel>
                    <Input
                      type={"text"}
                      placeholder={"Ex.: apart 307"}
                      variant={"forms-input"}
                    />
                  </FormControl>
                </Box>
              </HStack>
            </Stack>
          </Flex>

          <Flex
            className="registerAccountType"
            width={"85%"}
            display={"flex"}
            margin={"2rem auto"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"flex-start"}
            gap={"15px"}
          >
            <Text
              fontFamily={customTheme.fonts.inter}
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"24px"}
              color={customTheme.colors.greyScale.grey0}
            >
              Tipo de conta
            </Text>

            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="accountType" isRequired>
                    <Button variant={"select-type-announcement:enable"}>
                      Comprador
                    </Button>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city" isRequired>
                    <Button variant={"select-type-announcement:disabled"}>
                      Anunciante
                    </Button>
                  </FormControl>
                </Box>
              </HStack>
            </Stack>
          </Flex>

          <Flex
            className="registerAccountType"
            width={"85%"}
            display={"flex"}
            margin={"2rem auto"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"flex-start"}
            gap={"15px"}
          >
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <Input
                type={"password"}
                placeholder={"Digitar senha"}
                variant={"forms-input"}
              ></Input>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Confirmar senha</FormLabel>
              <Input
                type={"password"}
                placeholder={"Digitar senha"}
                variant={"forms-input"}
              ></Input>
            </FormControl>
          </Flex>

          <Flex
            className="btnSubmitForm"
            width={"85%"}
            display={"flex"}
            margin={"2rem auto"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Button width={"100%"} variant={"create-announcement:enable"}>
              Finalizar cadastro
            </Button>
          </Flex>
        </Box>
      </form>
      <Footer />
    </>
  );
};
