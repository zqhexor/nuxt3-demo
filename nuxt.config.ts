// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title: 'My World',
    },
  },
  modules: ['nuxt-svgo'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-px-to-viewport': {
        // options
        viewportWidth: 1920,
        // 媒体查询内的样式是否转化处理
        mediaQuery: true,
      },
    },
  },
  // 运行时的配置非public里面只对服务端暴露
  runtimeConfig: {
    public: {
      cmsSiteId: process.env.CMS_SITE_ID || 'Bzk3JYVadGmjnZ4qD5xb',
    },
  },

  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'https://www.dota2.com.cn',
  //         changeOrigin: true,
  //         rewrite: (path) => path.replace(/^\/api/, ''),
  //       },
  //     },
  //   },
  // },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://www.dota2.com.cn',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
