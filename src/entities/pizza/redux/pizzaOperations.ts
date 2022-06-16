import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaParams, Pizza } from "entities/pizza/model/model";
import { getPizzas } from "entities/pizza/api/api";

export const fetchPizzas = createAsyncThunk<Pizza[], PizzaParams>(
  "pizza/fetchPizzasStatus",
  async params => {
    const { sortBy, order, category, search, currentPage } = params;

    const credentials = {
      params: {
        page: currentPage,
        limit: 4,
        category,
        sortBy,
        order,
        search,
      },
    };

    const { data } = await getPizzas(credentials);

    return data;
  },
);
