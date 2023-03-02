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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterSchema } from "../../schemas/user.schema";
import { createUser } from "../../utils/user.util";

export const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm({ resolver: yupResolver(userRegisterSchema) });

  const type = watch("accountType");

  return (
    <>
      <NavBar />
      <form className="registerForm" onSubmit={handleSubmit(createUser)}>
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

            <FormControl id="full_name" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                type={"text"}
                placeholder="Ex: Jhon Doe"
                variant={"forms-input"}
                {...register("full_name")}
              />
              <Text>{errors.full_name?.message as string}</Text>
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                placeholder="Ex: jhondoe@kenzie.com.br"
                variant={"forms-input"}
                {...register("email")}
              />
              <Text>{errors.email?.message as string}</Text>
            </FormControl>

            <FormControl id="socialSecurityNumber" isRequired>
              <FormLabel>CPF</FormLabel>
              <Input
                type={"number"}
                placeholder="000.000.000-00"
                variant={"forms-input"}
                {...register("cpf")}
              />
              <Text>{errors.cpf?.message as string}</Text>
            </FormControl>

            <FormControl id="phone">
              <FormLabel>Celular</FormLabel>
              <Input
                type={"tel"}
                placeholder="(DDD)90000-0000"
                variant={"forms-input"}
                {...register("phone")}
              />
              <Text>{errors.phone?.message as string}</Text>
            </FormControl>

            <FormControl id="birthdate" isRequired>
              <FormLabel>Data de nascimento</FormLabel>
              <Input
                type={"date"}
                placeholder="00/00/00"
                variant={"forms-input"}
                {...register("birthdate")}
              />
              <Text>{errors.birthdate?.message as string}</Text>
            </FormControl>

            <FormControl id="description">
              <FormLabel>Descrição</FormLabel>
              <Input
                type={"text"}
                placeholder="Digitar descrição"
                variant={"forms-input"}
                {...register("description")}
              />
              <Text>{errors.description?.message as string}</Text>
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
                {...register("cep")}
              ></Input>
              <Text>{errors.cep?.message as string}</Text>
            </FormControl>

            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="state" isRequired>
                    <FormLabel>Estado</FormLabel>
                    <Input
                      type={"text"}
                      placeholder={"Digitar estado"}
                      variant={"forms-input"}
                      {...register("state")}
                    />
                    <Text>{errors.state?.message as string}</Text>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city" isRequired>
                    <FormLabel>Cidade</FormLabel>
                    <Input
                      type={"text"}
                      placeholder={"Digitar cidade"}
                      variant={"forms-input"}
                      {...register("city")}
                    />
                    <Text>{errors.city?.message as string}</Text>
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
                {...register("street")}
              />
              <Text>{errors.street?.message as string}</Text>
            </FormControl>

            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="number" isRequired>
                    <FormLabel>Número</FormLabel>
                    <Input
                      type={"number"}
                      placeholder={"Digitar número"}
                      variant={"forms-input"}
                      {...register("number")}
                    />
                    <Text>{errors.number?.message as string}</Text>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="complement" isRequired>
                    <FormLabel>Complemento</FormLabel>
                    <Input
                      type={"text"}
                      placeholder={"Ex.: apart 307"}
                      variant={"forms-input"}
                      {...register("complement")}
                    />
                    <Text>{errors.complement?.message as string}</Text>
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
                    <Button
                      onClick={() => {
                        setValue("accountType", "buyer", {
                          shouldValidate: true,
                        });
                      }}
                      variant={
                        type == "buyer"
                          ? "select-type-announcement:enable"
                          : "select-type-announcement:disabled"
                      }
                    >
                      Comprador
                    </Button>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city" isRequired>
                    <Button
                      onClick={() => {
                        setValue("accountType", "seller", {
                          shouldValidate: true,
                        });
                      }}
                      variant={
                        type == "seller"
                          ? "select-type-announcement:enable"
                          : "select-type-announcement:disabled"
                      }
                    >
                      Anunciante
                    </Button>
                  </FormControl>
                </Box>
              </HStack>
            </Stack>
          </Flex>

          <Flex
            className="registerPassword"
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
                {...register("password")}
              ></Input>
              <Text>{errors.password?.message as string}</Text>
            </FormControl>

            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirmar senha</FormLabel>
              <Input
                type={"password"}
                placeholder={"Digitar senha"}
                variant={"forms-input"}
                {...register("confirmPassword")}
              ></Input>
              <Text>{errors.confirmPassword?.message as string}</Text>
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
            <Button
              width={"100%"}
              variant={
                isValid
                  ? "create-announcement:enable"
                  : "create-announcement:disable"
              }
              type={"submit"}
            >
              Finalizar cadastro
            </Button>
          </Flex>
        </Box>
      </form>
      <Footer />
    </>
  );
};
