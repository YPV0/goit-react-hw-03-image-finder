import { Component } from 'react';
import { StyledButton } from './Button.styled';

export class Button extends Component {
  render() {
    return <StyledButton onClick={this.props.onClick}>Load more</StyledButton>;
  }
}
