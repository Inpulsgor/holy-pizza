import { FC, useCallback } from "react";
import { Categories } from "common/components";
import { useAppDispatch, useAppSelector } from "redux/store";
import { setCategoryId } from "entities/filter/redux/filterSlice";
import { Container } from "./Filters.styles";

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useAppSelector(state => state.filters);

  const onCategorySelect = useCallback(
    (idx: number) => dispatch(setCategoryId(idx)),
    [dispatch],
  );

  return (
    <Container>
      <Categories categoryId={categoryId} onCategorySelect={onCategorySelect} />
    </Container>
  );
};

export default Filters;
