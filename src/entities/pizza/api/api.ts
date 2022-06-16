import { AxiosRequestConfig } from "axios";
import { instance } from "common/api/instance";
import { PizzaParams } from "entities/pizza/model/model";

export const getPizzas = (credentials: AxiosRequestConfig<PizzaParams>) =>
  instance.get("/items", credentials);
