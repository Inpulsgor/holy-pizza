import { RequestStatus } from "types/enum";

export interface Pizza {
  id: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

export interface PizzaParams {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
}

export interface PizzaState {
  items: Pizza[];
  status: RequestStatus;
}
