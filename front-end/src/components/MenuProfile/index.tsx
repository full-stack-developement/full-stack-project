import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/profile.context";
import { sellerMocked } from "../../mocks/user.mock";
import Avatar from "../AvatarIcon";
import { ModalAddressUpdate } from "../ModalAddressUpdate";
import { ModalUserUpdate } from "../ModalUserUpdate";

export const MenuProfile = () => {
  const navigate = useNavigate();
  const { profile } = useContext(ProfileContext);

  return (
    <Menu>
      <MenuButton>
        <Avatar size="small" colorClass="avatarName-grey" />
      </MenuButton>
      <MenuList width="200px">
        <ModalUserUpdate user_id={profile.id}></ModalUserUpdate>
        <ModalAddressUpdate user_id={profile.id}></ModalAddressUpdate>
        <MenuItem
          onClick={() => {
            navigate("/profile");
          }}
          pl="22px"
          py="8px"
        >
          {profile.accountType == "seller" ? "Meus anúncios" : "Minhas compras"}
        </MenuItem>
        <MenuItem
          pl="22px"
          py="8px"
          onClick={() => {
            localStorage.removeItem("$TOKEN");
            navigate("/login");
          }}
        >
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
