import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES, HomePage, ProductPage, CartPage, NotFoundPage } from "routes";

const App: FC = () => {
  return (
    <Suspense fallback="...Loading">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
