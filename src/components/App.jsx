import { Component } from "react";
import { fetchImages } from "services/Pixabay-api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Searchbar } from "./Searchbar/Searchbar";
import { Wrapper } from "./App.styled";
import { BtnLoadMore } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import Modal from "./Modal/Modal";

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
  }

  componentDidUpdate(prevProps, prevState){
    if(
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ){
      this.getImages();
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  handleSubmit = async (data) => {
     this.setState({page: 1, images: []})
    if (data){
      this.setState({ searchQuery: data});
    }
  }

  getImages = async () => {
    try {
      this.setState({loading: true})
      const resultinImages = await fetchImages (this.state.searchQuery, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...resultinImages]
      }))
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({loading: false})
    };
  };

  openModal = ({largeImageURL, tags}) => {
    this.setState({showModal: true});
    this.setState({largeImageURL: largeImageURL});
    this.setState({tags: tags});
  };

  closeModal = () => {
    this.setState({showModal: false});
  }
  
  render() {
    const { images, loading, largeImageURL, tags, showModal } = this.state;
    const { handleSubmit, handleClick, openModal } = this;

    return (
      <Wrapper>
        {showModal && <Modal onClose={this.closeModal}>
          <img src={largeImageURL} alt={tags} />
          </Modal>}
        <Searchbar onSubmit={handleSubmit}/>
        <ImageGallery>
          {images && <ImageGalleryItem images={images} openModal={openModal}/>}
        </ImageGallery>
        {images.length > 0 && !loading && <BtnLoadMore onClick={handleClick}/>}
        {loading && <Loader/>}
      </Wrapper>
    );
  }
};