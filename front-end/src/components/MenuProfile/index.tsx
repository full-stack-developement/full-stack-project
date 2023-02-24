import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { sellerMocked } from "../../mocks/user.mock";
import Avatar from "../AvatarIcon";

export const MenuProfile = () => {

  const navigate = useNavigate()

  return (
    <Menu>
      <MenuButton>
        <Avatar size="small" colorClass="avatarName-grey"/>
      </MenuButton>
      <MenuList width="200px">
        <MenuItem pl="22px" py="8px" mt="13px">
          Editar perfil
        </MenuItem>
        <MenuItem pl="22px" py="8px">
          Editar endereço
        </MenuItem>
        <MenuItem onClick={()=>{
          navigate("/profile")
        }} pl="22px" py="8px">
          {sellerMocked.accountType == "seller" ? "Meus anúncios" : "Minhas compras"}
        </MenuItem>
        <MenuItem pl="22px" py="8px">
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
