import React from 'react';
import Logger from '../API';

export type handleCatchError = (err: Error) => void;
export type HandleErrorProps = {
  handleError?: handleCatchError;
  loggerKey: string;
  loggerBaseUrl: string;
};

export default class HandleError extends React.Component<HandleErrorProps> {
  private logger: Logger;

  constructor(props: HandleErrorProps) {
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
    if (this.props.handleError) {
      this.props.handleError(err);
    }
  }

  render() {
    return this.props.children;
  }
}
