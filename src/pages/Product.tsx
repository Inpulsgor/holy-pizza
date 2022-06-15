import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Product: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.product.title")}</title>
        <meta name="description" content={t("meta.product.description")} />
      </Helmet>

      <div>Product</div>
    </>
  );
};

export default Product;
