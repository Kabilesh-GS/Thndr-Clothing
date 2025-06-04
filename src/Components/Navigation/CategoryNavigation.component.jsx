import CategoryItem from "../Category-item/Category-item.component";
import './Navigation.style.scss'

const CategoryNavigation = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((categories) => (
        <CategoryItem key={categories.id} categories={categories} />
      ))}
    </div>
  );
};

export default CategoryNavigation;
