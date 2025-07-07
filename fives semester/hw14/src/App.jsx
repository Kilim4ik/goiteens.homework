import { Component } from "react";
import "./App.css";
import Searchbar from "./assets/components/searchbar/Searchbar";

import { fetchData } from "./api";
import Loader from "./assets/components/loader/Loader";
import ImageGallery from "./assets/components/image-gallery/ImageGallery";
import Button from "./assets/components/Button";
import Modal from "./assets/components/modal/Modal";
class App extends Component {
  state = {
    value: "",
    page: 1,
    imagesList: [],
    totalHits: 0,
    isLoading: false,
    error: null,
    modalContent: null,
  };
  handleChooseImg = (data) => {
    this.setState({ modalContent: data });
  };
  resetModalContent = () => {
    this.setState({ modalContent: null });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    this.setState({ value: form.search.value.trim().toLowerCase() });
  };
  handlePagination = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ isLoading: true, page: 1 });
      try {
        const data = await fetchData(this.state.value, 1);
        this.setState({
          imagesList: [...data.hits],
          totalHits: data.totalHits,
          isLoading: false,
        });
      } catch (error) {
        this.setState({ error, isLoading: false });
      }
    } else if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      try {
        const data = await fetchData(this.state.value, this.state.page);
        this.setState((prev) => ({
          imagesList: [...prev.imagesList, ...data.hits],
          totalHits: data.totalHits,
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error, isLoading: false });
      }
    }
  }

  render() {
    const { imagesList, isLoading, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />

        {error && <p>Opss... there is an error: {error.message}</p>}
        {isLoading && <Loader />}
        {imagesList.length === 0 && !isLoading ? (
          <p>You haven't been searching for anything yet or bad search</p>
        ) : (
          <>
            <ImageGallery
              images={imagesList}
              handleChooseImg={this.handleChooseImg}
            />
            <Button onClick={this.handlePagination} />
          </>
        )}
        {this.state.modalContent && (
          <Modal
            data={this.state.modalContent}
            resetModalContent={this.resetModalContent}
          />
        )}
      </div>
    );
  }
}

export default App;
