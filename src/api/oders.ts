import { StringDecoder } from "string_decoder";
import { IOrder } from "../interfaces/IOrder";
import { axiosInstance } from "./axiosInstance";

interface ICreateOrderDTO {
  table: string;
  products: {
    product: string;
    quantity: number;
  }[];
}

export async function getAllOrders() {
  const { data } = await axiosInstance.get<IOrder[]>("orders");

  return data;
}

export async function createOrder(request: ICreateOrderDTO) {
  const { data } = await axiosInstance.post("orders", request);

  return data;
}

export async function updateOrderStatus(tableNumber: string, status: string) {
  const { data } = await axiosInstance.patch(`orders/${tableNumber}`, status);

  return data;
}

export async function deleteOrder(tableNumber: StringDecoder) {
  const { data } = await axiosInstance.delete(`orders/${tableNumber}`);

  return data;
}
