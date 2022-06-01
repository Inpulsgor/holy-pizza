import { createSlice } from "@reduxjs/toolkit";
import { LoaderState } from "entities/loader/model/state";
import { LoadingStatus } from "types/enum";

const initialState: LoaderState = {
  isLoading: false,
  status: LoadingStatus.IDLE,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loaderActive: state => {
      state.isLoading = true;
      state.status = LoadingStatus.LOADING;
    },
    loaderDisabled: state => {
      state.isLoading = false;
      state.status = LoadingStatus.IDLE;
    },
  },
});

export const { loaderActive, loaderDisabled } = loaderSlice.actions;

export default loaderSlice;
