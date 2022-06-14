import { FC } from "react";
import styled from "styled-components";
import { ThemeToggle, LangSelect } from "common/components";

const Header = styled.header`
  grid-area: header;
  padding: 10px 0;
`;

const AppBar: FC = () => {
  return (
    <Header>
      <ThemeToggle />
      <LangSelect />
    </Header>
  );
};

export default AppBar;
