import "./App.css";
import { useContext } from "react";
import { GalleryContext } from "./context/galleryContext";
import Searchbar from "./assets/components/search-bar/Searchbar";
import Loader from "./assets/components/loader/Loader";
import Button from "./assets/components/Button";
import ImageGallery from "./assets/components/image-gallery/ImageGallery";
import Modal from "./assets/components/modal/Modal";
function App() {
  const { imgList, isLoading, error, selectedImage } =
    useContext(GalleryContext);

  return (
    <div className="App">
      <Searchbar />
      <ImageGallery />
      {isLoading && <Loader />}
      {error && <p>Opss... there is an error: {error?.message}</p>}
      {imgList.length !== 0 && <Button />}
      {selectedImage && <Modal />}
    </div>
  );
}

export default App;
