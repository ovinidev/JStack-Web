import { Flex, Text } from "@chakra-ui/react";
import { IOrder } from "../../interfaces/IOrder";

interface TableItemProps {
  tableNumber: string;
  itemsCount: number;
  onClick: () => void;
}

export const TableItem = ({
  tableNumber,
  itemsCount,
  onClick,
}: TableItemProps) => {
  return (
    <Flex
      as="div"
      bg="gray.0"
      h="8rem"
      w="100%"
      borderRadius="8px"
      border="1px solid rgba(204, 204, 204, 0.4)"
      css={{
        "&:last-child": {
          marginBottom: "16px",
        },
      }}
      align="center"
      justify="center"
      direction="column"
      cursor="pointer"
      transition="all 0.8s"
      _hover={{
        filter: "brightness(0.9)",
      }}
      onClick={onClick}
    >
      <Text fontSize="1rem" fontWeight={500} color="gray.500">
        Mesa {tableNumber}
      </Text>
      <Text fontSize="large" fontWeight={400} color="gray.400">
        {itemsCount} itens
      </Text>
    </Flex>
  );
};
