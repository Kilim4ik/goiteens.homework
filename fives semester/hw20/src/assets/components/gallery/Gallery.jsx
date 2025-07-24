import { useContext } from "react";
import { GalleryContext } from "../../../context/galleryContext";
import Searchbar from "./search-bar/Searchbar";
import Loader from "./loader/Loader";
import Button from "./Button";
import ImageGallery from "./image-gallery/ImageGallery";
import Modal from "./modal/Modal";
function Gallery() {
  const { imgList, isLoading, error, selectedImage } =
    useContext(GalleryContext);

  return (
    <>
      <Searchbar />
      <ImageGallery />
      {isLoading && <Loader />}
      {error && <p>Opss... there is an error: {error?.message}</p>}
      {imgList.length !== 0 && <Button />}
      {selectedImage && <Modal />}
    </>
  );
}

export default Gallery;
