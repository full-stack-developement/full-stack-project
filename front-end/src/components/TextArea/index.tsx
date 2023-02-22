import { Box, Textarea } from "@chakra-ui/react";
import {customTheme} from "../../theme"
import { Text } from "../Text";

interface ITextArea{
  text : string
  placeholder : string;
}

export const TextArea = (props : ITextArea) => {
  return (
    <Box>
      <Text text={props.text} variant="label-content-form"></Text>
      <Textarea
        fontFamily={"inter"}
        fontSize={"1rem"}
        placeholder={props.placeholder}
        size={"lg"}
        border={`1.5px solid ${customTheme.colors.greyScale.grey7}`}
        focusBorderColor={customTheme.colors.brand.brand2}
        _hover={{ backgroundColor: customTheme.colors.greyScale.grey8 }}
        color={customTheme.colors.greyScale.grey1}
        _placeholder={{ color: customTheme.colors.greyScale.grey3 }}
      ></Textarea>
    </Box>
  );
};
