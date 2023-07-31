import { useSelector } from "react-redux/es/exports";
import CategoryPreview from "../../components/category-preview/category-preview.component";
//import "./categories-preview.styles.scss";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(state => state.categories.categoriesMap);
  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};
export default CategoriesPreview;
