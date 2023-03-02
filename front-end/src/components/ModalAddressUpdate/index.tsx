import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../contexts/user.context"
import { Button } from "../Button"
import { InputText } from "../InputText"
import { Text } from "../Text"


export function ModalAddressUpdate(id: string){
    const { isOpen, onOpen, onClose} = useDisclosure()

    const {handleSubmit,register,setValue,formState : {errors,isValid},watch} = useForm()

    const {users,setUsers} = useContext(UserContext)

    return(        
    <>
        <Button onClick={onOpen} variant={"open-modal-announcement"} size="small-auto" text="Editar endereço"></Button>
        <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Endereço</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text text="Informações de endereço" variant="title-content-form"></Text>
                <Box>
                    <InputText register={{...register("cep")}} placeholder="Digitar CEP" text="CEP"></InputText>
                    {errors.cep && <Text variant="errors-form" text={errors.cep.message as string}></Text> }
                </Box>
                <Flex gap={"1rem"}>
                    <Box>
                        <InputText register={{...register("state")}} placeholder="Estado" text="Estado"></InputText>
                        {errors.state && <Text variant="errors-form" text={errors.state.message as string}></Text> }
                    </Box>
                    <Box>
                        <InputText register={{...register("city")}} placeholder="Cidade" text="Cidade"></InputText>
                        {errors.city && <Text variant="errors-form" text={errors.city.message as string}></Text> }
                    </Box>
                </Flex>
                <Box>
                    <InputText register={{...register("street")}} placeholder="Rua" text="Rua"></InputText>
                    {errors.street && <Text variant="errors-form" text={errors.street.message as string}></Text> }
                </Box>
                <Flex gap={"1rem"}>
                    <Box>
                        <InputText register={{...register("number")}} placeholder="Número" text="Número"></InputText>
                        {errors.number && <Text variant="errors-form" text={errors.number.message as string}></Text> }
                    </Box>
                    <Box>
                        <InputText register={{...register("complement")}} placeholder="Complemento" text="Complemento"></InputText>
                        {errors.complement && <Text variant="errors-form" text={errors.complement.message as string}></Text> }
                    </Box>
                </Flex>
          </ModalBody>
          <ModalFooter>
          <Button onClick={onClose} variant={"exclude/cancel-announcement"} size="large-100%" text="Cancelar"></Button>
            <Button type={"submit"} variant={"create-announcement:enable"} size="large-100%" text="Salvar alterações"></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

    )
}