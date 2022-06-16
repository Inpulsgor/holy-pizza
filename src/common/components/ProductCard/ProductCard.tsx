import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrossIcon } from "assets/icons/plus.svg";
import { UAH } from "common/static/const";
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
  ButtonText,
  Quantity,
} from "./ProductCard.styles";
import { ProductCardProps } from "./ProductCard.types";

const ProductCard: FC<ProductCardProps> = ({
  product: { id, title, price, imageUrl, sizes = [], types = [] },
}) => {
  return (
    <Card>
      <Link key={id} to={`product/${id}`}>
        <Image src={imageUrl} alt="pizza image" />
        <Title>{title}</Title>
      </Link>
      <Properties>
        <Thickness>
          {types.map(type => (
            <ThicknessItem key={type}>{type}</ThicknessItem>
          ))}
        </Thickness>
        <Sizes>
          {sizes.map(size => (
            <SizeItem key={size}>{size}</SizeItem>
          ))}
        </Sizes>
      </Properties>
      <Controls>
        <Price>
          {price} {UAH}
        </Price>
        <AddToCart>
          <CrossIcon />
          <ButtonText>Add</ButtonText>
          <Quantity>3</Quantity>
        </AddToCart>
      </Controls>
    </Card>
  );
};

export default ProductCard;
