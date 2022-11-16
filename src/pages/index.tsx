import { Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../components/Header";
import {
  ManageTableModal,
  Status,
} from "../components/Modals/ManageTableModal";
import { TableStatus } from "../components/TableStatus";
import { TableItem } from "../components/TableStatus/TableItem";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [requestStatus, setRequestStatus] = useState<Status>(Status.WAITING);

  const handleRequest = () => {
    setRequestStatus(Status.IN_PRODUCTION);
    onOpen();
  };

  return (
    <Flex direction="column" h="100vh" w="100%">
      <Header />
      <Flex w="100%" align="center" justify="center" mt="2.5rem">
        <Flex w="80%" justifyContent="space-between">
          <TableStatus status="Fila de espera" requests={1} icon="🕗">
            <TableItem itemsCount={2} tableNumber={1} onClick={handleRequest} />
          </TableStatus>

          <TableStatus status="Em produção " requests={1} icon="👩‍🍳">
            <TableItem itemsCount={2} tableNumber={1} onClick={handleRequest} />
          </TableStatus>

          <TableStatus status="Pronto!" requests={1} icon="✅">
            <TableItem itemsCount={2} tableNumber={1} onClick={handleRequest} />
          </TableStatus>
        </Flex>
      </Flex>

      <ManageTableModal
        isOpen={isOpen}
        onClose={onClose}
        requestStatus={requestStatus}
      />
    </Flex>
  );
}
