import { Component } from 'react';
import { getImgData } from 'API/API';
import { Modal } from 'components/Form/Form';
import Loading from 'components/Loader/Loader';
import { nanoid } from 'nanoid';

import {
  StyledImageGallery,
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    imgData: [],
    isLoading: false,
    showModal: false,
    largeImageURL: null,
  };

  componentDidMount() {
    const { q, page } = this.props;
    this.setState({ isLoading: true });

    getImgData(q, page)
      .then(data => {
        this.setState({ imgData: data.data.hits || [] });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps) {
    const { q, page } = this.props;

    if (q !== prevProps.q) {
      this.setState({ isLoading: true });

      getImgData(q, page)
        .then(data => {
          this.setState({ imgData: data.data.hits || [] });
        })
        .finally(() => this.setState({ isLoading: false }));
    } else if (page !== prevProps.page) {
      this.setState({ isLoading: true });

      getImgData(q, page)
        .then(data => {
          this.setState(prevState => ({
            imgData: prevState.imgData.concat(data.data.hits || []),
          }));
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  openModal = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: null });
  };

  render() {
    const { imgData, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <StyledImageGallery className="ImageGallery">
            {imgData.map(({ id, webformatURL, largeImageURL }) => (
              <StyledImageGalleryItem
                key={nanoid()}
                className="ImageGallery-item"
              >
                <StyledImageGalleryItemImage
                  className="ImageGallery-image"
                  src={webformatURL}
                  alt={id}
                  data-source={largeImageURL}
                  onClick={() => this.openModal(largeImageURL)}
                />
              </StyledImageGalleryItem>
            ))}
          </StyledImageGallery>
        )}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
