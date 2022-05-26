import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Holy Pizza</title>
        <meta name="description" content="home" />
      </Helmet>

      <div>Home</div>
    </>
  );
};

export default Home;
