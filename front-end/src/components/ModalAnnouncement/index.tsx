import { Box, ButtonGroup, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,useDisclosure } from "@chakra-ui/react";
import {Text} from "../Text"
import { Button } from "../Button";
import { InputText } from "../InputText";
import { TextArea } from "../TextArea";

export function ModalAnnouncement(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
    <>
        <Button onClick={onOpen} variant="open-modal-announcement" size="large" text="Criar anúncio"></Button>
        <Modal variant={"create-auction"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Anúncio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mb={"2rem"}>
                <Text text="Tipo de anúncio" variant="title-content-form"></Text>
                <ButtonGroup justifyContent={"center"} width={"100%"}>
                    <Button variant="select-type-announcement:disabled" size="large-100%" text="Venda"></Button>
                    <Button variant="select-type-announcement:disabled" size="large-100%" text="Leilão"></Button>
                </ButtonGroup>
            </Box>
            <Text text="Informações do veículo" variant="title-content-form"></Text>
            <Box>
                <InputText placeholder="Digitar título" text="Título"></InputText>
            </Box>
            <Flex gap={"1rem"}>
                <InputText placeholder="Digitar ano" text="Ano"></InputText>
                <InputText placeholder="0" text="Quilometragem"></InputText>
                <InputText placeholder="Digitar preço" text="Preço"></InputText>
            </Flex>
            <Box>
                <TextArea text="Descrição" placeholder="Digitar Descrição"></TextArea>
            </Box>
            <Box mb={"2rem"}>
                <Text text="Tipo de veículo" variant="title-content-form"></Text>
                <ButtonGroup justifyContent={"center"} width={"100%"}>
                    <Button variant="select-type-announcement:disabled" size="large-100%" text="Carro"></Button>
                    <Button variant="select-type-announcement:disabled" size="large-100%" text="Moto"></Button>
                </ButtonGroup>
            </Box>
            <Box>
                <InputText placeholder="Inserir URL da imagem" text="Imagem da capa"></InputText>
            </Box>
            <Box>
                <InputText placeholder="Inserir URL da imagem" text="1° Imagem da galeria"></InputText>
            </Box>
            <Box mt={"1rem"} mb={"1rem"}>
                <Button variant="create-field-image-announcement" text="Adicionar campo para imagem da galeria" size="small-auto"></Button>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant="exclude/cancel-announcement" size="small-auto" text="Cancelar"></Button>
            <Button variant="create-announcement:disable" size="small-auto" text="Criar anúncio"></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

    )
}