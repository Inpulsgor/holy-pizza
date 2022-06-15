import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { NotFound } from "common/components";
import { ROUTES } from "routes";

const Unfound: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.HOME);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{t("meta.notFound.title")}</title>
        <meta name="description" content={t("meta.notFound.description")} />
      </Helmet>

      <NotFound />
    </>
  );
};

export default Unfound;
