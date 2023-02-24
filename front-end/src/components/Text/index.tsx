import {Text as TextChakra} from "@chakra-ui/react"

type typeVariants = "title-content-form" | "label-content-form" | "errors-form" | "text-delete" | "title-card" | "info-card" | "profile-description" // tipe suas variantes aqui

interface ITextProps{
    text: string
    variant : typeVariants
}

export function Text(props: ITextProps){
    return (
    <TextChakra wordBreak={"break-word"} variant={props.variant}>{props.text}</TextChakra>
)
}