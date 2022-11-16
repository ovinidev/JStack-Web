import { Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { getAllOrders } from "../api/oders";
import { Header } from "../components/Header";
import { ManageTableModal } from "../components/Modals/ManageTableModal";
import { TableStatus } from "../components/TableStatus";
import { TableItem } from "../components/TableStatus/TableItem";
import { useQuery } from "@tanstack/react-query";
import { IOrder, IProducts, Status } from "../interfaces/IOrder";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tableData, setTableData] = useState<IOrder>({} as IOrder);

  const handleRequest = (data: IOrder) => {
    setTableData(data);
    onOpen();
  };

  const { data, isLoading, error } = useQuery(
    ["orders"],
    async () => {
      const data = await getAllOrders();

      return data;
    },
    {}
  );

  return (
    <Flex direction="column" h="100vh" w="100%">
      <Header />
      <Flex w="100%" align="center" justify="center" mt="2.5rem">
        <Flex w="80%" justifyContent="space-between">
          <TableStatus status="Fila de espera" requests={1} icon="🕗">
            {data?.map((order) => {
              if (order.status === Status.WAITING) {
                return (
                  <TableItem
                    key={order.__id}
                    itemsCount={order.products.length}
                    tableNumber={order.table}
                    onClick={() => handleRequest(order)}
                  />
                );
              }
            })}
          </TableStatus>

          <TableStatus status="Em produção " requests={1} icon="👩‍🍳">
            {data?.map((order) => {
              if (order.status === Status.IN_PRODUCTION) {
                return (
                  <TableItem
                    key={order.__id}
                    itemsCount={order.products.length}
                    tableNumber={order.table}
                    onClick={() => handleRequest(order)}
                  />
                );
              }
            })}
          </TableStatus>

          <TableStatus status="Pronto!" requests={1} icon="✅">
            {data?.map((order) => {
              if (order.status === Status.READY) {
                return (
                  <TableItem
                    key={order.__id}
                    itemsCount={order.products.length}
                    tableNumber={order.table}
                    onClick={() => handleRequest(order)}
                  />
                );
              }
            })}
          </TableStatus>
        </Flex>
      </Flex>

      <ManageTableModal
        isOpen={isOpen}
        onClose={onClose}
        tableData={tableData}
      />
    </Flex>
  );
}
