import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzas } from "entities/pizza/api/api";
import { Pizza, PizzaParams } from "entities/pizza/model/model";
// import pickBy from "lodash/pickBy";
// import identity from "lodash/identity";

export const fetchPizzas = createAsyncThunk<Pizza[], PizzaParams>(
  "pizza/fetchPizzas",
  async params => {
    const response = await getPizzas(params);

    return response.data;
  },
);
