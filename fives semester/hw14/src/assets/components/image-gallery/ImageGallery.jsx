import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    const { images, handleChooseImg } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map((img) => (
          <ImageGalleryItem
            key={img.id}
            data={img}
            handleChooseImg={() => handleChooseImg(img)}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
