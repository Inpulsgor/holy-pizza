import { FC, ReactNode } from "react";
import styled from "styled-components";

interface AppBodyProps {
  children: ReactNode;
}

const Main = styled.main``;

const AppBody: FC<AppBodyProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default AppBody;
