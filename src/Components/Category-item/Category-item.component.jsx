import { Link } from "react-router-dom";
import "./Category-item.style.scss";

const CategoryItem = (props) => {
  return (
    props.categories.name &&
    <Link className="category-container" to={props.categories.redirect}>
      <div className="background-image" style={{backgroundImage: `url(${props.categories.Imageurl})`,}} />
      <div className="category-body">
        <h1>{props.categories.name}</h1>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
