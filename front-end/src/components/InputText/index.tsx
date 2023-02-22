import { Box, Input, InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
import {customTheme} from "../../theme"
import { Text } from "../Text";

interface IInputText{
  text : string
  placeholder : string;
  register? : UseFormRegisterReturn<"title"|"year"|"km"|"price"|"coverImage">
}

export const InputText = (props : IInputText) => {
  return (
    <Box>
      <Text text={props.text} variant="label-content-form"></Text>
      <Input
        {...props.register}
        fontFamily={"inter"}
        fontSize={"1rem"}
        placeholder={props.placeholder}
        size={"lg"}
        border={`1.5px solid ${customTheme.colors.greyScale.grey7}`}
        focusBorderColor={customTheme.colors.brand.brand2}
        _hover={{ backgroundColor: customTheme.colors.greyScale.grey8 }}
        color={customTheme.colors.greyScale.grey1}
        _placeholder={{ color: customTheme.colors.greyScale.grey3 }}
      ></Input>
    </Box>
  );
};
