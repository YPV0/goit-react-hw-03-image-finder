import { Component } from 'react';
import {
  MagnifyingGlassIcon,
  StyledHeader,
  StyledSearchForm,
  StyledSearchInput,
  StyledSubmitButton,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

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
      <StyledHeader>
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
      </StyledHeader>
    );
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
}
