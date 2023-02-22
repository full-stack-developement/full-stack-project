import {Button as ButtonChakra} from "@chakra-ui/react"

type typeVariants = "open-modal-announcement" | "create-announcement:enable" 
| "create-announcement:disable" | "exclude/cancel-announcement" 
| "select-type-announcement:disabled" | "select-type-announcement:enable" 
| "create-field-image-announcement" // tipe suas variantes aqui

interface IButtonProps{
    text: string;
    size : "small" | "small-100%" |"large" | "large-100%" | "large-auto" | "small-auto"
    variant : typeVariants
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button(props: IButtonProps){
    return (
    <ButtonChakra onClick={props.onClick} variant={props.variant} size={props.size} >{props.text}</ButtonChakra>
)
}