import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "common/layout";
import { ROUTES, HomePage, ProductPage, CartPage, NotFoundPage } from "routes";

const App: FC = () => {
  return (
    <Suspense fallback="...Loading">
      <Routes>
        <Route path={ROUTES.HOME} element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
