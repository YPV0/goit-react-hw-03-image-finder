import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { GalleryItem } from './GalleryItem/GalleryItem';

export class App extends Component {
  state = {
    q: '',
    page: 1,
  };

  onSearchSubmit = name => {
    this.setState({ q: name, page: 1 });
  };

  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGallery>
          <GalleryItem q={this.state.q} page={this.state.page} />
        </ImageGallery>
        <Button onClick={this.onButtonClick} />
      </div>
    );
  }
}
