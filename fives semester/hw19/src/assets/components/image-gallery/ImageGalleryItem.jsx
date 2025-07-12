import { useContext } from "react";
import { GalleryContext } from "../../../context/galleryContext";

const ImageGalleryItem = ({ data }) => {
  const { handleImageSelect } = useContext(GalleryContext);

  return (
    <li className="ImageGalleryItem" onClick={() => handleImageSelect(data)}>
      <img
        className="ImageGalleryItem-image"
        src={data.webformatURL}
        alt="joke"
      />
    </li>
  );
};
export default ImageGalleryItem;
