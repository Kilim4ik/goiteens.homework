import { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    const { data, handleChooseImg } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={handleChooseImg}>
        <img
          className="ImageGalleryItem-image"
          src={data.webformatURL}
          alt="joke"
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
