import { FC } from "react";
import { Logo, SearchBar, CartButton } from "common/components";
import { HeaderProps } from "./Header.types";
import { Heading } from "./Header.styles";

const Header: FC<HeaderProps> = () => {
  return (
    <Heading>
      <Logo />
      <SearchBar />
      <CartButton />
    </Heading>
  );
};

export default Header;
