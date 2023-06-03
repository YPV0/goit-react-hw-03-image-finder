import { Component } from 'react';
import { getImgData } from 'API/API';

export class ImageGallery extends Component {
  state = {
    imgData: [],
  };

  componentDidMount() {
    const { q, page } = this.props;
    getImgData(q, page).then(data => {
      this.setState({ imgData: data.data.hits || [] });
    });
  }

  componentDidUpdate(prevProps) {
    const { q, page } = this.props;

    if (q !== prevProps.q) {
      getImgData(q, page).then(data => {
        this.setState({ imgData: data.data.hits || [] });
      });
    } else if (page !== prevProps.page) {
      getImgData(q, page).then(data => {
        this.setState(prevState => ({
          imgData: prevState.imgData.concat(data.data.hits || []),
        }));
      });
    }
  }

  render() {
    const { imgData } = this.state;
    return (
      <ul className="ImageGallery">
        {imgData.map(({ id, webformatURL, largeImageURL }, index) => (
          <li key={id + '-' + index} className="ImageGallery-item">
            <img
              className="ImageGallery-image"
              src={webformatURL}
              alt={id}
              data-source={largeImageURL}
            />
          </li>
        ))}
      </ul>
    );
  }
}
