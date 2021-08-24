import { errorHandle } from './vueError';
import Logger from '../API';

export type ErrParams = {
  key: string;
  baseUrl?: string;
};

export class WindowError {
  public key: string;
  public logger: Logger;

  constructor({ key, baseUrl }: ErrParams) {
    this.key = key;
    this.logger = new Logger(key, baseUrl);
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
    };
  }
}

export { Logger };

export const VueErrorPlugin = errorHandle;
