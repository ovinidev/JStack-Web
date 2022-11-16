import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      bg="primary"
      h="12rem"
      w="100%"
      color="gray.0"
      align="center"
      justify="center"
    >
      <Flex w="80%" align="center" justify="space-between">
        <Flex direction="column">
          <Heading as="h3" variant="h3">
            Pedidos
          </Heading>
          <Text fontSize="1rem">Acompanhe os pedidos dos clientes</Text>
        </Flex>

        <Image src="/logo.svg" alt="logo" />
      </Flex>
    </Flex>
  );
};
