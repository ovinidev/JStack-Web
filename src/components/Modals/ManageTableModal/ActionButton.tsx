import { Button, ButtonProps, Text } from "@chakra-ui/react";

interface ActionButtonProps extends ButtonProps {
  text: string;
  emoji?: string;
}

export const ActionButton = ({ text, emoji, ...rest }: ActionButtonProps) => {
  return (
    <Button
      h="2.75rem"
      w="100%"
      bg="gray.500"
      borderRadius="48px"
      fontSize="1rem"
      color="gray.0"
      _hover={{ filter: "brightness(0.8)" }}
      {...rest}
    >
      <Text mr="5px">{emoji}</Text>
      <Text>{text}</Text>
    </Button>
  );
};
