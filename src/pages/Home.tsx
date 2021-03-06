import { FC } from "react";
import { Helmet } from "react-helmet-async";
import {
  Filters,
  ProductList,
  // Pagination
} from "common/components";
import { useTranslation } from "react-i18next";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.home.title")}</title>
        <meta name="description" content={t("meta.home.description")} />
      </Helmet>

      <Filters />
      <ProductList />
      {/* <Pagination /> */}
    </>
  );
};

export default Home;
