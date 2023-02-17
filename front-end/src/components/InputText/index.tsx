import { Input, InputProps } from "@chakra-ui/react";
import theme from "../../theme/chakra";

export const InputText = (args: InputProps) => {
  return (
    <Input
      size={"lg"}
      border={`1.5px solid ${theme.greyScale.grey7}`}
      focusBorderColor={theme.brand.brand2}
      _hover={{ backgroundColor: theme.greyScale.grey8 }}
      color={theme.greyScale.grey1}
      _placeholder={{ color: theme.greyScale.grey3 }}
      {...args}
    ></Input>
  );
};
