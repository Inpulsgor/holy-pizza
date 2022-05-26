import { FC } from "react";
import styled from "styled-components";

const Header = styled.header`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const AppBar: FC = () => {
  return <Header>AppBar</Header>;
};

export default AppBar;
