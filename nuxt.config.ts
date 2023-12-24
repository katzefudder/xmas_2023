// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/style.css',
    '~/assets/css/custom.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        },
        css: {
          boostrapCss: '@use "~/assets/bootstrap.min.css',
          styleCss: '@use "~/assets/style.css',
          customCss: '@use "~/assets/custom.css'
        }
      }
    }
  },
  app: {
    baseURL: '/xmas_2024/',
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }
})
