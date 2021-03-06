import { AppState, useAppSelector } from "redux/store";
import { LoaderState } from "entities/loader/model/state";

const useLoading = (): LoaderState => {
  const { isLoading, status } = useAppSelector(
    (state: AppState) => state.loader,
  );

  return {
    isLoading,
    status,
  };
};

export default useLoading;
