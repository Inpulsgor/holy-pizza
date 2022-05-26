import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, AppBody, AppBasement } from "common/layout";

const AppLayout: FC = () => {
  return (
    <div>
      <AppBar />
      <AppBody>
        <Outlet />
      </AppBody>
      <AppBasement />
    </div>
  );
};

export default AppLayout;
