import { Flex, chakra, Input, Button, Text, Box } from "@chakra-ui/react";
import { NavBar } from "../../components/NavBar";
import { customTheme } from "../../theme";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <form className="loginForm" action="">
        <Box
          className="LoginFormContainer"
          width={"412px"}
          height={"500px"}
          margin={"auto"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform="translateY(-50%) translateX(-50%)"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          bg={customTheme.colors.greyScale.grey8}
          padding={"15px"}
        >
          <Flex className="loginFormTtle">
            <Text fontFamily={customTheme.fonts.lexend} variant={"forms-title"}>
              Login
            </Text>
          </Flex>
          <Flex
            className="loginFormInput"
            width={"90%"}
            height={"50%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"left"}
            justifyContent={"space-around"}
          >
            <chakra.label
              color={customTheme.colors.greyScale.grey1}
              fontFamily={customTheme.fonts.inter}
              fontWeight={customTheme.fontWeights["body-2-500"]}
              fontSize={customTheme.fontSizes["body-2-500"]}
            >
              Usuário
            </chakra.label>
            <Input
              width={"100%"}
              height={"45px"}
              placeholder="Digitar usuário"
              border={"solid 1px"}
              borderColor={customTheme.colors.greyScale.grey3}
            ></Input>
            <chakra.label>Senha</chakra.label>
            <Input
              width={"100%"}
              height={"50px"}
              border={"solid 1px"}
              borderColor={customTheme.colors.greyScale.grey3}
              placeholder="Digitar senha"
            ></Input>
            <Button border={"none"} alignSelf={"flex-end"}>
              {" "}
              Esqueci minha senha
            </Button>
          </Flex>
          <Flex
            className="loginFormBtn"
            width={"90%"}
            height={"40%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Button
              width={"100%"}
              height={"45px"}
              variant={"create-announcement:enable"}
            >
              Entrar
            </Button>
            <Text> Ainda não possui conta?</Text>
            <Button
              width={"100%"}
              height={"45px"}
              variant={"open-modal-announcement"}
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </Button>
          </Flex>
        </Box>
      </form>
    </>
  );
};
