import { Button, chakra } from "@chakra-ui/react";
import { AvatarContainer } from "./style";

const Avatar = () => {
  return (
    <AvatarContainer>
      <div className="avatarLetter">R</div>
      <span className="avatarType">Anunciante</span>
    </AvatarContainer>
  );
};

export default Avatar;
