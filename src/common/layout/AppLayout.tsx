import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, AppBody, AppBasement } from "common/layout";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  gap: 0 30px;
  min-height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: auto minmax(320px, 1200px) auto;
    grid-template-areas:
      ". header header ."
      ". main main ."
      ". footer footer .";
  }
`;

const AppLayout: FC = () => (
  <AppWrapper>
    <AppBar />
    <AppBody>
      <Outlet />
    </AppBody>
    <AppBasement />
  </AppWrapper>
);

export default AppLayout;
