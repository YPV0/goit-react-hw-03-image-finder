import { Component } from 'react';
import {
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchbar,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  };
  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchInput
            type="text"
            placeholder="Search"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}
