import { Button, chakra } from "@chakra-ui/react";
import { AvatarContainer } from "./style";

export interface IAvatarProps {
  colorClass: string;
}

const Avatar = (props: IAvatarProps) => {
  return (
    <AvatarContainer>
      <div className='avatarLetter'>R</div>
      <span className={props.colorClass}>Anunciante</span>
    </AvatarContainer>
  );
};

export default Avatar;
