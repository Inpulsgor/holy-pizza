import { FC } from "react";
import { ClockLoader } from "react-spinners";
import { Backdrop } from "./Loader.styles";

const Loader: FC = () => (
  <Backdrop>
    <ClockLoader loading size={80} />
  </Backdrop>
);

export default Loader;
