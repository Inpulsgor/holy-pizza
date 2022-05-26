import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Product: FC = () => {
  return (
    <>
      <Helmet>
        <title>Product</title>
        <meta name="description" content="product" />
      </Helmet>

      <div>Product</div>
    </>
  );
};

export default Product;
