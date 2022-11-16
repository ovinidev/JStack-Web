import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { IOrder, Status } from "../../../interfaces/IOrder";
import { ActionButton } from "./ActionButton";
import { Legend } from "./Legend";
import { RequestItem } from "./RequestItem";

interface ManageTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  tableData?: IOrder;
}

export const ManageTableModal = ({
  isOpen,
  onClose,
  tableData,
}: ManageTableModalProps) => {
  const totalPriceOfRequest = tableData?.products?.reduce((prev, current) => {
    return prev + current.product.price * current.quantity;
  }, 0);

  const products = tableData?.products?.map((product) => {
    return product.product;
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay bg="rgba(0,0,0,0.8)" backdropFilter="blur(5px)" />
      <ModalContent w={500} h={600}>
        <ModalHeader pt="2rem">
          <Heading color="gray.500" as="h4" variant="h4">
            Mesa {tableData?.table}
          </Heading>
        </ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody>
          <Flex direction="column">
            <Legend m="1rem 0 0.6rem 0">Status do Pedido</Legend>

            <HStack spacing="2" fontSize="1rem" mb="2rem">
              <Text>🕗</Text>
              <Text color="gray.500" fontWeight={600}>
                {tableData?.status === Status.IN_PRODUCTION
                  ? "Em produção"
                  : "Fila de espera"}
              </Text>
            </HStack>

            <Stack spacing="4">
              <Legend>Itens</Legend>

              <Stack spacing="5" overflowY="scroll" h={185}>
                {products !== undefined ? (
                  tableData?.products?.map((item) => {
                    return (
                      <RequestItem
                        key={item.product.__id}
                        title={item.product.description}
                        value={item.product.price}
                        imagePath={item.product.imagePath}
                        quantity={item.quantity}
                      />
                    );
                  })
                ) : (
                  <Heading>nada</Heading>
                )}
              </Stack>

              <Flex justify="space-between">
                <Legend>Total</Legend>
                <Text fontWeight={600} fontSize="1rem" color="gray.500">
                  R$ {totalPriceOfRequest?.toFixed(2)}
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Stack spacing="2" w="100%">
            {tableData?.status === Status.IN_PRODUCTION ? (
              <ActionButton emoji="✅" text="Concluir pedido" />
            ) : (
              <ActionButton emoji="👩‍🍳" text="Iniciar produção" />
            )}
            <ActionButton bg="none" color="primary" text="Cancelar pedido" />
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
