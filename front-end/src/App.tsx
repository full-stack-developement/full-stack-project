import {
  Button,
  ButtonGroup,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ModalExample } from "./components/Modal";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  function showToast() {
    toast({
      title: "Você clicou no Toast.",
      description: "Sim, você clicou.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
  return (
    <>
      <ModalExample isOpen={isOpen} onClose={onClose} />
      <Stack direction={"row"} align={"center"} spacing={"4"}>
        <Button
          colorScheme={"purple"}
          margin={4}
          variant={"solid"}
          onClick={onOpen}
        >
          Abrir modal
        </Button>
        <Button
          colorScheme={"purple"}
          margin={4}
          variant={"outline"}
          onClick={showToast}
        >
          Toast
        </Button>
      </Stack>
    </>
  );
}

export default App;
