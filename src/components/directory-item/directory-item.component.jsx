import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";
import { BackgroundImageWrap, BodyWrap, DirectoryContainer } from "./directory-item.styles.jsx";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()
  const navigateHandler = () => navigate(route)
  return (
    <DirectoryContainer onClick={navigateHandler}>
      <BackgroundImageWrap
        imageUrl={imageUrl}

      />
      <BodyWrap>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyWrap>
    </DirectoryContainer>
  );
};
export default DirectoryItem;
