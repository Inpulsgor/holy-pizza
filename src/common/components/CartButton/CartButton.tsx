import { FC } from "react";
import { ROUTES } from "routes";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { Button } from "./CartButton.styles";

const CartButton: FC = () => {
  return (
    <Button to={ROUTES.CART}>
      &#8372;
      <CartIcon />
    </Button>
  );
};

export default CartButton;
