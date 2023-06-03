import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

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
        <ImageGallery q={this.state.q} page={this.state.page}></ImageGallery>
        <Button onClick={this.onButtonClick}></Button>
      </div>
    );
  }
}
