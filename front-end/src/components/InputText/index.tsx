import { Input, InputProps } from "@chakra-ui/react";
import {customTheme} from "../../theme"

export const InputText = (args: InputProps) => {
  return (
    <Input
      size={"lg"}
      border={`1.5px solid ${customTheme.colors.greyScale.grey7}`}
      focusBorderColor={customTheme.colors.brand.brand2}
      _hover={{ backgroundColor: customTheme.colors.greyScale.grey8 }}
      color={customTheme.colors.greyScale.grey1}
      _placeholder={{ color: customTheme.colors.greyScale.grey3 }}
      {...args}
    ></Input>
  );
};
