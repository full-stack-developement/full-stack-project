import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Button } from "../Button"
import { Text } from "../Text"

export function ModalAnnouncementDelete() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <Button onClick={onOpen} variant="exclude/cancel-announcement" size="large" text="Excluir anúncio"></Button>
        <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Excluir Anúncio</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box mb={"2rem"}>
                        <Text text="Tem certeza que deseja remover este anúncio?" variant="title-content-form"></Text>
                        <Text text="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."  variant="text-delete"></Text>
                    </Box>
                </ModalBody>
            <Box>
            <ModalFooter>
                <Button onClick={onClose} variant="exclude/cancel-announcement" size="small-auto" text="Cancelar"></Button>
                <Button variant="exclude-announcement" size="small-auto" text="Sim, excluir anúncio"></Button>
            </ModalFooter>
            </Box>
            </ModalContent>
        </Modal>
        </>
    )
}