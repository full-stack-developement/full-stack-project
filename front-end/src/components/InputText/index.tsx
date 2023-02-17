import { Input, InputProps } from "@chakra-ui/react";
import theme from "../../theme/sc";

export const InputText = (args: InputProps) => {
  return (
    <Input
      size={"lg"}
      border={`1.5px solid ${theme.colors.greyScale.grey7}`}
      focusBorderColor={theme.colors.brand.brand2}
      _hover={{ backgroundColor: theme.colors.greyScale.grey8 }}
      color={theme.colors.greyScale.grey1}
      _placeholder={{ color: theme.colors.greyScale.grey3 }}
      {...args}
    ></Input>
  );
};
