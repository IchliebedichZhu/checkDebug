import type { VueConstructor } from 'vue';

export interface IErrorHandle<T extends VueConstructor = VueConstructor> {
  install(Vue: T, options: Record<string, any>): void;
}

export const errorHandle: IErrorHandle = {
  install(Vue: VueConstructor, options: Record<string, any>) {
    Vue.config.errorHandler = function (err, vm, info) {
      console.log(err);
      console.log(vm);
      console.log(info);
    };
  },
};
