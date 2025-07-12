import { useContext } from "react";
import { GalleryContext } from "../../context/galleryContext";

const Button = () => {
  const { handlePaginetion } = useContext(GalleryContext);
  return (
    <button onClick={() => handlePaginetion()} className="Button">
      Get more
    </button>
  );
};

export default Button;
