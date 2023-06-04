import { Component } from 'react';
import { Modal } from 'components/Form/Form';
import PropTypes from 'prop-types';

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
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    largeImageURL: PropTypes.string,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
}
