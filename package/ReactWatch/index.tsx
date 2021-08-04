import React from 'react';

export default class HandleError extends React.Component {
  componentDidCatch(err: Error) {
    console.log('err', err);
  }

  render() {
    return this.props.children;
  }
}
