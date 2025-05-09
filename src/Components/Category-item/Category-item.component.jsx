import "./Category-item.style.scss";

const CategoryItem = (props) => {
  return (
    props.categories.name &&
    <div className="category-container">
      <div className="background-image" style={{backgroundImage: `url(${props.categories.Imageurl})`,}} />
      <div className="category-body">
        <h1>{props.categories.name}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
