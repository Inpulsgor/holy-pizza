import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrossIcon } from "assets/icons/plus.svg";
import {
  Card,
  Image,
  Title,
  Properties,
  Thickness,
  Sizes,
  ThicknessItem,
  SizeItem,
  Controls,
  Price,
  AddToCart,
  Quantity,
} from "./ProductCard.styles";
import { PizzaCardProps } from "./ProductCard.types";

const PizzaCard: FC<PizzaCardProps> = ({
  product: {
    id,
    title,
    price,
    imageUrl = "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    sizes = [],
    types = [],
  },
}) => {
  return (
    <Card>
      <Link key={id} to={`/pizza/${id}`}>
        <Image src={imageUrl} alt="pizza image" />
        <Title>{title}</Title>
      </Link>
      <Properties>
        <Thickness>
          {types.map(size => (
            <ThicknessItem>{size}</ThicknessItem>
          ))}
        </Thickness>
        <Sizes>
          {sizes.map(size => (
            <SizeItem>{size}</SizeItem>
          ))}
        </Sizes>
      </Properties>
      <Controls>
        <Price>{price}</Price>
        <AddToCart>
          <CrossIcon />
          Add
          <Quantity>3</Quantity>
        </AddToCart>
      </Controls>
    </Card>
  );
};

export default PizzaCard;
