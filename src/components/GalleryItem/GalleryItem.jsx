import { Component } from 'react';
import { getImgData } from 'API/API';
import { nanoid } from 'nanoid';

import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from './GalleryItem.styled';

export class GalleryItem extends Component {
  state = {
    imgData: [],
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

  render() {
    const { imgData } = this.state;
    const { openModal } = this.props;

    return (
      <>
        {imgData.map(({ id, webformatURL, largeImageURL }) => (
          <StyledImageGalleryItem key={nanoid()} className="ImageGallery-item">
            <StyledImageGalleryItemImage
              className="ImageGallery-image"
              src={webformatURL}
              alt={id}
              data-source={largeImageURL}
              onClick={() => openModal(largeImageURL)}
            />
          </StyledImageGalleryItem>
        ))}
      </>
    );
  }
}
