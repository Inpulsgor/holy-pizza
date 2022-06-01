import axios from "axios";
import { PizzaParams, Pizza } from "entities/pizza/model/model";

const url = "https://626d16545267c14d5677d9c2.mockapi.io/items";

export const getPizzas = (params: PizzaParams) => {
  // const { sortBy, order, category, search, currentPage } = params;

  console.log(params);

  const response = axios.get<Pizza[]>(url);

  return response;
};
