import { useContext, useEffect } from "react";
import { GalleryContext } from "../../../../context/galleryContext";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery() {
  const { imgList, getImages } = useContext(GalleryContext);

  useEffect(() => {
    getImages();
  }, []);
  return (
    <ul className="ImageGallery">
      {imgList.map((img) => (
        <ImageGalleryItem key={img.id} data={img} />
      ))}
    </ul>
  );
}
