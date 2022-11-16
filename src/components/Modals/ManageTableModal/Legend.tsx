import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LegendProps extends TextProps {
  children: ReactNode;
}

export const Legend = ({ children, ...rest }: LegendProps) => {
  return (
    <Text color="gray.400" fontSize="1rem" fontWeight={400} {...rest}>
      {children}
    </Text>
  );
};
