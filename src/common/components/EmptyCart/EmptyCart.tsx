import { FC } from "react";
import { ROUTES } from "routes";
import cartImage from "assets/images/empty-cart.png";
import { EmptyCartProps } from "./EmptyCart.types";
import {
  Container,
  Title,
  Description,
  Image,
  Button,
} from "./EmptyCart.styles";

const EmptyCart: FC<EmptyCartProps> = () => {
  return (
    <Container>
      <Title>Cart is empty 😕</Title>
      <Description>You haven{"&apos;"}t ordered pizza yet</Description>
      <Description>To order pizza, go to the main page</Description>
      <Image src={cartImage} alt="empty cart image" />
      <Button to={ROUTES.HOME}>Back to home</Button>
    </Container>
  );
};

export default EmptyCart;
