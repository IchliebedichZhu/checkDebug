import type { VueConstructor } from 'vue';
import Vue from 'vue';
import Logger from '../API';

type handleErrorFun = (err: Error, vm: Vue, info: string) => void;
export interface IErrorHandle<T extends VueConstructor = VueConstructor> {
  install(Vue: T, options: Record<string, any>): void;
}

type handleFunction = (
  key: string,
  baseUrl: string,
  handleError?: handleErrorFun
) => IErrorHandle;

export const errorHandle: handleFunction = (key, baseUrl, handleError) => {
  return {
    install(Vue: VueConstructor, options: Record<string, any>) {
      const logger = new Logger(key, baseUrl);
      Vue.config.errorHandler = function (err, vm, info) {
        console.log(err, vm, info);
        logger.add({
          type: 'error',
          event: info,
          source: JSON.stringify(vm.$data),
          line: 0,
          column: 0,
          error: err.message,
        });
        if (handleError) {
          handleError(err, vm, info);
        }
      };
    },
  };
};
