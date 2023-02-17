import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Avatar from "../Avatar";

export const MenuProfile = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar />
      </MenuButton>
      <MenuList width="200px">
        <MenuItem pl="22px" py="8px" mt="13px">
          Editar perfil
        </MenuItem>
        <MenuItem pl="22px" py="8px">
          Editar endereço
        </MenuItem>
        <MenuItem pl="22px" py="8px">
          Minhas compras
        </MenuItem>
        <MenuItem pl="22px" py="8px">
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
