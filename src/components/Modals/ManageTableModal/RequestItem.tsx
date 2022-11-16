import { Flex, HStack, Image, Text } from "@chakra-ui/react";

interface RequestItemProps {
  title: string;
  value: number;
  imagePath: string;
  quantity: number;
}

export const RequestItem = ({
  title,
  value,
  imagePath,
  quantity,
}: RequestItemProps) => {
  return (
    <HStack spacing="3">
      <Image src={imagePath} />
      <Text
        alignSelf="flex-start"
        fontSize="large"
        fontWeight={400}
        color="gray.400"
      >
        {quantity}x
      </Text>
      <Flex direction="column">
        <Text color="gray.500" fontSize="1rem" fontWeight={600}>
          {title}
        </Text>
        <Text fontSize="large" fontWeight={400} color="gray.400">
          {value}
        </Text>
      </Flex>
    </HStack>
  );
};
