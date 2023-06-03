import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Form.styled';
import Loading from 'components/Loader/Loader';

export class Modal extends Component {
  state = {
    imageLoaded: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { imageLoaded } = this.state;
    const { largeImageURL } = this.props;

    return (
      <StyledOverlay onClick={this.handleBackdropClick}>
        {!imageLoaded && <Loading />}
        <StyledModal imageLoaded={imageLoaded}>
          <img
            src={largeImageURL}
            alt=""
            style={{ display: imageLoaded ? 'block' : 'none' }}
            onLoad={this.handleImageLoad}
          />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
