import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Cart: FC = () => {
  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="cart" />
      </Helmet>

      <div>Cart</div>
    </>
  );
};

export default Cart;
