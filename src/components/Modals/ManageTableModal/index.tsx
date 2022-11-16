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
import { ActionButton } from "./ActionButton";
import { Legend } from "./Legend";
import { RequestItem } from "./RequestItem";

export enum Status {
  WAITING = "WAITING",
  IN_PRODUCTION = "IN_PRODUCTION",
  READY = "READY",
}

interface ManageTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestStatus: Status;
}

export const ManageTableModal = ({
  isOpen,
  onClose,
  requestStatus,
}: ManageTableModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay bg="rgba(0,0,0,0.8)" backdropFilter="blur(5px)" />
      <ModalContent w={500} h={600}>
        <ModalHeader pt="2rem">
          <Heading color="gray.500" as="h4" variant="h4">
            Mesa 2
          </Heading>
        </ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody>
          <Flex direction="column">
            <Legend m="1rem 0 0.6rem 0">Status do Pedido</Legend>

            <HStack spacing="2" fontSize="1rem" mb="2rem">
              <Text>🕗</Text>
              <Text color="gray.500" fontWeight={600}>
                {requestStatus === Status.IN_PRODUCTION
                  ? "Em produção"
                  : "Fila de espera"}
              </Text>
            </HStack>

            <Stack spacing="4">
              <Legend>Itens</Legend>

              <Stack spacing="5" overflowY="scroll" h={185}>
                <RequestItem />
                <RequestItem />
                <RequestItem />
                <RequestItem />
                <RequestItem />
              </Stack>

              <Flex justify="space-between">
                <Legend>Total</Legend>
                <Text fontWeight={600} fontSize="1rem" color="gray.500">
                  R$ 50,00
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Stack spacing="2" w="100%">
            {requestStatus === Status.IN_PRODUCTION ? (
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
