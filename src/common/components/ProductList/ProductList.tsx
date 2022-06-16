import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/store";
import { ProductCard } from "common/components";
import { fetchPizzas } from "entities/pizza/redux/pizzaOperations";
import { Container, Products } from "./ProductList.styles";

const ProductList: FC = () => {
  const { items } = useAppSelector(state => state.pizza);
  const dispatch = useAppDispatch();

  const getPizzas = async () => {
    const sortBy = "";
    const order = "";
    const category = "";
    const search = "";
    const currentPage = "";

    const params = {
      sortBy,
      order,
      category,
      search,
      currentPage,
    };

    dispatch(fetchPizzas(params));
  };

  useEffect(() => {
    getPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Products>
        {items.map(productItem => (
          <ProductCard key={productItem.id} product={productItem} />
        ))}
      </Products>
    </Container>
  );
};

export default ProductList;
