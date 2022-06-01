import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaState, Pizza } from "entities/pizza/model/model";
import { fetchPizzas } from "entities/pizza/redux/pizzaOperations";
import { AppState } from "redux/store";
import { RequestStatus } from "types/enum";

const initialState: PizzaState = {
  items: [],
  status: RequestStatus.IDLE,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
      state.status = RequestStatus.IDLE;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, state => {
      state.items = [];
      state.status = RequestStatus.PENDING;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = RequestStatus.SUCCEEDED;
    });
    builder.addCase(fetchPizzas.rejected, state => {
      state.status = RequestStatus.FAILED;
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: AppState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice;
