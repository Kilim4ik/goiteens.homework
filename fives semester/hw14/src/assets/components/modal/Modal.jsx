import { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  closeModal = (e) => {
    if (e.key === "Escape") this.props.resetModalContent();
  };
  componentDidMount() {
    document.addEventListener("keydown", this.closeModal);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModal);
  }
  render() {
    const { data, resetModalContent } = this.props;
    return (
      <div className="overlay" onClick={resetModalContent}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <img src={data.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
