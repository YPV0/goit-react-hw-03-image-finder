import { Component } from 'react';
import { Modal } from 'components/Form/Form';

import { StyledImageGallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: null,
  };

  openModal = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: null });
  };

  render() {
    const { showModal, largeImageURL, children } = this.props;

    return (
      <div>
        <StyledImageGallery className="ImageGallery">
          {children}
        </StyledImageGallery>
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
