import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { GalleryItem } from './GalleryItem/GalleryItem';
import { StyledLoader } from './Loader/Loader.styled';

export class App extends Component {
  state = {
    q: '',
    page: 1,
    showModal: false,
    largeImageURL: null,
    isLoading: false,
    totalHits: 0,
    imagesLoadedSoFar: 0,
  };

  handleLoadingChange = isLoading => {
    this.setState({ isLoading });
  };

  onSearchSubmit = name => {
    this.setState({ q: name, page: 1, totalHits: 0, imagesLoadedSoFar: 0 });
  };

  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  updateLoadedImages = images => {
    this.setState(prevState => ({
      imagesLoadedSoFar: prevState.imagesLoadedSoFar + images,
    }));
  };

  updateTotalHits = totalHits => {
    this.setState({ totalHits });
  };

  openModal = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: null });
  };

  render() {
    const {
      q,
      page,
      showModal,
      largeImageURL,
      isLoading,
      totalHits,
      imagesLoadedSoFar,
    } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGallery
          showModal={showModal}
          largeImageURL={largeImageURL}
          closeModal={this.closeModal}
        >
          <GalleryItem
            q={q}
            page={page}
            openModal={this.openModal}
            onLoadingChange={this.handleLoadingChange}
            onLoadedImagesChange={this.updateLoadedImages}
            onTotalHitsChange={this.updateTotalHits}
          />
        </ImageGallery>

        <Button
          onClick={this.onButtonClick}
          hasMore={imagesLoadedSoFar < totalHits}
        />
        {isLoading && (
          <StyledLoader
            color={'cyan'}
            style={{
              margin: '-20px auto',
              position: 'static',
              display: 'block',
              width: '50px',
              height: '50px',
            }}
          />
        )}
      </div>
    );
  }
}
