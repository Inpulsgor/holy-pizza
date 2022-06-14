import { createSlice } from "@reduxjs/toolkit";
import { LangState } from "entities/lang/model/model";
import { LangType } from "types/enum";

const initialState: LangState = {
  lang: LangType.EN,
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice;
