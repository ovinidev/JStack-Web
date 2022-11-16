import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { TableItem } from "./TableItem";

interface TableStatusProps {
  status: string;
  icon: string;
  requests: number;
  children: ReactNode;
}

export const TableStatus = ({
  status,
  icon,
  requests,
  children,
}: TableStatusProps) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      w="24rem"
      h="100%"
      bg="gray.100"
      border="1px solid rgba(204, 204, 204, 0.4)"
      borderRadius="16px"
    >
      <HStack spacing="2" m="24px 0 32px">
        <Text>{icon}</Text>
        <Text color="gray.500" fontWeight={600} fontSize="large">
          {status}
        </Text>
        <Text color="gray.500" fontSize="large">
          ({requests})
        </Text>
      </HStack>

      <Stack w="100%" spacing="8" px="16px">
        {children}
      </Stack>
    </Flex>
  );
};
