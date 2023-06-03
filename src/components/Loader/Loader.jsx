import { Component } from 'react';

export class Loader extends Component {
  render() {
    return <button onClick={this.props.onClick}>Load more</button>;
  }
}
