import { lazy } from "react";

export enum ROUTES {
  HOME = "/",
  PRODUCT = "product",
  CART = "cart",
  UNFOUND = "*",
}

export const HomePage = lazy(
  () => import("pages/Home" /* webpackChunkName: "HomePage" */),
);

export const ProductPage = lazy(
  () => import("pages/Product" /* webpackChunkName: "ProductPage" */),
);

export const CartPage = lazy(
  () => import("pages/Cart" /* webpackChunkName: "CartPage" */),
);

export const UnfoundPage = lazy(
  () => import("pages/Unfound" /* webpackChunkName: "UnfoundPage" */),
);
