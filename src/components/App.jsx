import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    q: '',
    page: 1,
  };

  onSearchSubmit = name => {
    this.setState({ q: name });
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
        <Loader onClick={this.onButtonClick}></Loader>
      </div>
    );
  }
}
