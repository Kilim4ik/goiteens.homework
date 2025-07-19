import { useContext } from "react";
import { GalleryContext } from "../../../context/galleryContext";

export default function Modal() {
  const { selectedImage, resetSelectedImage } = useContext(GalleryContext);
  return (
    <div className="overlay" onClick={resetSelectedImage}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage.largeImageURL} alt="" />
      </div>
    </div>
  );
}
