import "./directory.scss";
import CategroyItem from "../category-item/CategroyItem";

const Directory = ({categories}) => {
 
  return (
    <div className="categories-container">
      {categories.map((item) => {
        return <CategroyItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Directory;
