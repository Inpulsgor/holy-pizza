import { FC, ReactNode } from "react";
import styled from "styled-components";

interface AppContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AppContainer: FC<AppContainerProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default AppContainer;
