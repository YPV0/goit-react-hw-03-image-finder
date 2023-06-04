import { Component } from 'react';
import { StyledButton } from './Button.styled';
import Loading from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return this.props.q.length > 1 ? (
      <StyledButton onClick={this.props.onClick}>Load more</StyledButton>
    ) : (
      this.props.q !== '' && <Loading />
    );
  }

  static propTypes = {
    q: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
}
