export default defineNuxtPlugin((nuxtApp) => {
  // 方式一
  nuxtApp.provide('hello', (msg: string) => `Hello ${msg}!`);

  // 方式二
  // return {
  //   provide: {
  //     hello: (msg: string) => `Hello ${msg}!`,
  //   },
  // };
});
