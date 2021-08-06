import { errorHandle } from './vueError';

export function windowError() {
  window.onerror = (event, source, line, column, error): void => {
    console.log('code error', {
      event,
      source,
      line,
      column,
      error,
    });
  };
}

export const VueErrorPlugin = errorHandle;
