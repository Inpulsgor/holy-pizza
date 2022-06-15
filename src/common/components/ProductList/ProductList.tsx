import { FC } from "react";
import { useAppSelector } from "redux/store";
import { ProductCard } from "common/components";
import { Container, Products } from "./ProductList.styles";

const ProductList: FC = () => {
  const { items } = useAppSelector(state => state.pizza);

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
