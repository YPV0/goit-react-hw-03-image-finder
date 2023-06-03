import { Component } from 'react';
import {
  MagnifyingGlassIcon,
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchbar,
  StyledSubmitButton,
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
      <header>
        <StyledSearchbar>
          <StyledSearchForm onSubmit={this.handleSubmit}>
            <StyledSubmitButton type="submit" className="button">
              <MagnifyingGlassIcon></MagnifyingGlassIcon>
            </StyledSubmitButton>
            <StyledSearchInput
              type="text"
              placeholder="Search"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </StyledSearchForm>
        </StyledSearchbar>
      </header>
    );
  }
}