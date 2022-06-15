import { FC } from "react";
import { ROUTES } from "routes";
import PizzaIcon from "assets/images/logo.png";
import { Button, Icon, Title } from "./Logo.styles";

const Logo: FC = () => {
  return (
    <Button to={ROUTES.HOME}>
      <Icon src={PizzaIcon} alt="Pizza logo" />
      <Title>Holy Pizza</Title>
    </Button>
  );
};

export default Logo;
