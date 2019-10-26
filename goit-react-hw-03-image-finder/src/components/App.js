import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import DataLoader from "./loader/DataLoader";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import axios from "axios";

class App extends Component {
  state = {
    images: [],
    search: "",
    page: 1,
    loader: false,
    modal: false,
    modalImage: "",
  };

  openModal = async (e) => {
    const target = e.target;
    await this.setState({ modal: true, modalImage: target.dataset.image });

    window.addEventListener("keydown", this.closeModal);
    window.addEventListener("click", this.closeModal);
  };

  closeModal = (e) => {
    if (e.code === "Escape" || e.target.className === "Overlay") {
      this.setState({ modal: false, modalImage: "" });
      window.removeEventListener("keydown", this.closeModal);
      window.removeEventListener("click", this.closeModal);
    }
  };

  handleSearch = async (e) => {
    e && e.preventDefault();
    const { search, page } = this.state;

    if (search === "") return;
    const apiKey = "16765616-737565fd8ffe84de2bba83620";

    await this.setState({ loader: true });
    const response = await axios.get(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );
    e
      ? this.setState({ images: response.data.hits })
      : this.setState((prev) => {
          return { images: [...prev.images, ...response.data.hits] };
        });

    this.setState({ loader: false });
  };

  handleChangeSearch = (e) => {
    this.setState({ search: e.target.value, page: 1, images: [] });
  };

  loadMore = async () => {
    await this.setState((prev) => {
      return { page: prev.page + 1 };
    });
    await this.handleSearch();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { images, loader, modalImage, modal, search } = this.state;

    return (
      <>
        {modal && <Modal img={modalImage} />}
        <Searchbar
          change={this.handleChangeSearch}
          search={this.handleSearch}
          value={search}
        />
        {loader && <DataLoader />}
        {images.length !== 0 && (
          <ImageGallery data={images} modal={this.openModal} />
        )}
        {images.length !== 0 && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

export default App;
