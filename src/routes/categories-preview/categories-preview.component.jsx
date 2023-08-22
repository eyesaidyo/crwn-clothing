import { useSelector } from "react-redux/es/exports";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
//import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(state => state.categories.categoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  return (
    <div className="category-preview-container">
      {
        isLoading ? <Spinner /> :
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
      }
    </div>
  );
};
export default CategoriesPreview;
