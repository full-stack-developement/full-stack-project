import {Text as TextChakra} from "@chakra-ui/react"

type typeVariants = "title-content-form" | "label-content-form" // tipe suas variantes aqui

interface ITextProps{
    text: string;
    variant : typeVariants
}

export function Text(props: ITextProps){
    return (
    <TextChakra variant={props.variant}>{props.text}</TextChakra>
)
}