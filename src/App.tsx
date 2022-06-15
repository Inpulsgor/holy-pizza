import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "common/components";
import { AppLayout } from "common/layout";
import { useLoader } from "common/hooks";
import { ROUTES, HomePage, ProductPage, CartPage, UnfoundPage } from "routes";

const App: FC = () => {
  const { isLoading } = useLoader();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
          </Route>
          <Route path={ROUTES.UNFOUND} element={<UnfoundPage />} />
        </Routes>
      </Suspense>

      {isLoading && <Loader />}
    </>
  );
};

export default App;
