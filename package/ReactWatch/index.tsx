import React from 'react';
import Logger from '../API';

export default class HandleError extends React.Component {
  private logger: Logger;

  constructor(props: Record<string, any>) {
    super(props);
    this.logger = new Logger(props.loggerKey, props.loggerBaseUrl);
  }

  componentDidCatch(err: Error) {
    console.log('err', err);
    this.logger.add({
      type: 'error',
      event: err.name,
      source: err.stack || '',
      line: 0,
      column: 0,
      error: err.message,
    });
  }

  render() {
    return this.props.children;
  }
}
