import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "routes";

const NotFound: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(ROUTES.HOME), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Page not found</title>
        <meta name="description" content="not found" />
      </Helmet>

      <div>404</div>
    </>
  );
};

export default NotFound;
