import { Component } from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { onClick, hasMore } = this.props;

    return hasMore ? (
      <StyledButton onClick={onClick}>Load more</StyledButton>
    ) : null;
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
  };
}
