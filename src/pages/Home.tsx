import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="home" />
      </Helmet>

      <div>Home</div>
    </>
  );
};

export default Home;
