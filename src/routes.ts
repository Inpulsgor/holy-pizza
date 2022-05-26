import { lazy } from "react";

export enum ROUTES {
  HOME = "/",
  PRODUCT = "/product",
  CART = "/cart",
  NOT_FOUND = "*",
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

export const NotFoundPage = lazy(
  () => import("pages/NotFound" /* webpackChunkName: "NotFoundPage" */),
);