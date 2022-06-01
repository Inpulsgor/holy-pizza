import { FC } from "react";
import styled from "styled-components";

const Header = styled.header`
  grid-area: header;
`;

const AppBar: FC = () => {
  return <Header>AppBar</Header>;
};

export default AppBar;
