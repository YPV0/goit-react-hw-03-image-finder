import { Component } from 'react';
import { Modal } from 'components/Form/Form';

import { StyledImageGallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    const { showModal, largeImageURL, closeModal, children } = this.props;

    return (
      <div>
        <StyledImageGallery className="ImageGallery">
          {children}
        </StyledImageGallery>
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={closeModal} />
        )}
      </div>
    );
  }
}
