import { EKitchenCategory, ETableStatus } from "./types";

export interface IkitchenItem {
    name: string;
    category : EKitchenCategory;
    price: number;
}

export interface IOrder {
   items : IkitchenItem[];
}

export interface ITable {
    num : number;
    order : IOrder;
    status : ETableStatus
}