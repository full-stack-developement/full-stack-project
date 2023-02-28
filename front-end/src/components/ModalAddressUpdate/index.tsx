import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import { Button } from "../Button"
import { InputText } from "../InputText"
import { Text } from "../Text"

export function ModalAddressUpdate(){
    const { isOpen, onOpen, onClose} = useDisclosure()

    return(        
    <>
        <Button onClick={onOpen} variant={"open-modal-announcement"} size="small-auto" text="Editar"></Button>
        <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Endereço</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text text="Informações de endereço" variant="title-content-form"></Text>
                <Box>
                    <InputText placeholder="Digitar CEP" text="CEP"></InputText>
                </Box>
                <Flex gap={"1rem"}>
                    <Box>
                        <InputText placeholder="Estado" text="Estado"></InputText>
                    </Box>
                    <Box>
                        <InputText placeholder="Cidade" text="Cidade"></InputText>
                    </Box>
                </Flex>
                <Box>
                    <InputText placeholder="Rua" text="Rua"></InputText>
                </Box>
                <Flex gap={"1rem"}>
                    <Box>
                        <InputText placeholder="Número" text="Número"></InputText>
                    </Box>
                    <Box>
                        <InputText placeholder="Complemento" text="Complemento"></InputText>
                    </Box>
                </Flex>
          </ModalBody>
          <ModalFooter>
          <Button onClick={onClose} variant="exclude/cancel-announcement" size="large-100%" text="Cancelar"></Button>
            <Button type={"submit"} variant={"create-announcement:enable"} size="large-100%" text="Salvar alterações"></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

    )
}