export enum Status {
  WAITING = "WAITING",
  IN_PRODUCTION = "IN_PRODUCTION",
  READY = "READY",
}

export interface IProducts {
  __id: string;
  product: {
    __id: string;
    description: string;
    price: number;
    imagePath: string;
  };
  quantity: number;
}

export interface IOrder {
  __id: string;
  table: string;
  status: Status;
  createdAt: Date;
  products: IProducts[];
}
