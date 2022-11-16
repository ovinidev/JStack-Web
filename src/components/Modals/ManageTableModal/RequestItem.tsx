import { Flex, HStack, Image, Text } from "@chakra-ui/react";

interface RequestItemProps {}

export const RequestItem = ({}: RequestItemProps) => {
  return (
    <HStack spacing="3">
      <Image src="/pizza.svg" />
      <Text
        alignSelf="flex-start"
        fontSize="large"
        fontWeight={400}
        color="gray.400"
      >
        1x
      </Text>
      <Flex direction="column">
        <Text color="gray.500" fontSize="1rem" fontWeight={600}>
          Frango com Catupiry
        </Text>
        <Text fontSize="large" fontWeight={400} color="gray.400">
          R$ 40,00
        </Text>
      </Flex>
    </HStack>
  );
};
