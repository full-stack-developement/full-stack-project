import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/user.context";
import { userUpdateSchema } from "../../schemas/user.schema";
import { updateUser } from "../../utils/user.util";
import { Button } from "../Button";
import { InputText } from "../InputText";
import { Text } from "../Text";

interface IModalUserUpdateProps {
  user_id: string;
}
export function ModalUserUpdate(props: IModalUserUpdateProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm({ resolver: yupResolver(userUpdateSchema) });

  const { users, setUsers } = useContext(UserContext);

  return (
    <>
      <Button
        onClick={onOpen}
        variant={"open-modal-announcement"}
        size="small-auto"
        text="Editar perfil"
      ></Button>
      <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Perfil</ModalHeader>
          <ModalCloseButton />

          <form
            onSubmit={handleSubmit(async (data) => {
              const response = await updateUser(data, props.user_id);
              if (response?.message == "success") {
                setUsers((old) => {
                  const copyOld = [...old];
                  const indexValue = copyOld.findIndex(
                    (el) => el.id == props.user_id
                  );
                  copyOld.splice(indexValue, 1, response.data);
                  return copyOld;
                });
                onClose();
              }
            })}
          >
            <ModalBody>
              <Text
                text="Informações pessoais"
                variant="title-content-form"
              ></Text>
              <Box>
                <InputText
                  register={{ ...register("full_name") }}
                  placeholder="Digitar nome"
                  text="Nome"
                ></InputText>
                {errors.full_name && (
                  <Text
                    variant="errors-form"
                    text={errors.full_name.message as string}
                  ></Text>
                )}
              </Box>
              <Box>
                <InputText
                  register={{ ...register("email") }}
                  placeholder="@kenzie.com.br"
                  text="Email"
                ></InputText>
                {errors.email && (
                  <Text
                    variant="errors-form"
                    text={errors.email.message as string}
                  ></Text>
                )}
              </Box>
              <Box>
                <InputText
                  register={{ ...register("cpf") }}
                  placeholder="000.000.000-00"
                  text="CPF"
                ></InputText>
                {errors.cpf && (
                  <Text
                    variant="errors-form"
                    text={errors.cpf.message as string}
                  ></Text>
                )}
              </Box>
              <Box>
                <InputText
                  register={{ ...register("phone") }}
                  placeholder="0"
                  text="Celular"
                ></InputText>
                {errors.phone && (
                  <Text
                    variant="errors-form"
                    text={errors.phone.message as string}
                  ></Text>
                )}
              </Box>
              <Box>
                <InputText
                  register={{ ...register("birthDate") }}
                  placeholder=""
                  text="Data de nascimento"
                ></InputText>
                {errors.birthDate && (
                  <Text
                    variant="errors-form"
                    text={errors.birthDate.message as string}
                  ></Text>
                )}
              </Box>
              <Box>
                <InputText
                  register={{ ...register("complement") }}
                  placeholder=""
                  text="Data de nascimento"
                ></InputText>
                {errors.complement && (
                  <Text
                    variant="errors-form"
                    text={errors.complement.message as string}
                  ></Text>
                )}
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={onClose}
                variant="exclude/cancel-announcement"
                size="large-100%"
                text="Cancelar"
              ></Button>
              <Button
                type={"submit"}
                variant={"create-announcement:enable"}
                size="large-100%"
                text="Salvar alterações"
              ></Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
