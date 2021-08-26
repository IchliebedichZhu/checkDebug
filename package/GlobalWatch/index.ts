import { errorHandle } from './vueError';
import Logger from '../API';

type handleErrorFun = (
  event: string | Event,
  source: string,
  line: number,
  column: number,
  error: Error
) => void;

export type ErrParams = {
  key: string;
  baseUrl?: string;
  handleError?: handleErrorFun;
};

export class WindowError {
  public key: string;
  public logger: Logger;
  public handleError?: handleErrorFun;

  constructor({ key, baseUrl, handleError }: ErrParams) {
    this.key = key;
    this.logger = new Logger(key, baseUrl);
    this.handleError = handleError;
  }

  public start(isPrintLog: boolean) {
    window.onerror = (
      event,
      source = '',
      line = 0,
      column = 0,
      error = new Error()
    ): void => {
      if (isPrintLog) {
        console.log('code error', {
          event,
          source,
          line,
          column,
          error,
        });
      }
      this.logger.add({
        type: 'error',
        event: event.toString(),
        source,
        line,
        column,
        error: error.message,
      });
      if (this.handleError) {
        this.handleError(event, source, line, column, error);
      }
    };
  }
}

export { Logger };

export const VueErrorPlugin = errorHandle;
