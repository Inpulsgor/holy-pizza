import { FC, memo } from "react";
import { categories } from "common/static/const";
import { CategoriesProps } from "./Categories.types";
import { List, Item, Button } from "./Categories.styles";

const Categories: FC<CategoriesProps> = memo(
  ({ categoryId, onCategorySelect }: CategoriesProps) => {
    const handleClick = (id: number) => {
      if (onCategorySelect) onCategorySelect(id);
    };

    return (
      <List>
        {categories.map((categoryName, index) => (
          <Item key={categoryName}>
            <Button
              active={index === categoryId}
              onClick={() => handleClick(index)}
            >
              {categoryName}
            </Button>
          </Item>
        ))}
      </List>
    );
  },
);

export default Categories;
