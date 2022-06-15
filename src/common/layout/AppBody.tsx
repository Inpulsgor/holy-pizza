import { FC, ReactNode } from "react";
import styled from "styled-components";

interface AppBodyProps {
  children: ReactNode;
}

const Main = styled.main`
  grid-area: main;
  border-radius: 10px;
  background-color: #fff;
`;

const AppBody: FC<AppBodyProps> = ({ children }) => <Main>{children}</Main>;

export default AppBody;
