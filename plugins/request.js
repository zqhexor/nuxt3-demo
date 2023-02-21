export default defineNuxtPlugin(({ provide, $config }) => {
  // 服务端不用代理
  let baseURL = 'https://www.dota2.com.cn';
  if (process.isClient) {
    baseURL = '/api';
  }

  const CMSService = $fetch.create({
    baseURL,
    onRequest: ({ request, options }) => {
      options.params.site = $config.public.cmsSiteId;
    },
    onResponse: ({ request, response }) => {
      const data = response._data;
      if (data.status !== 'success') {
        return Promise.reject(res);
      }
    },
  });
  provide('CMSService', CMSService);
});
