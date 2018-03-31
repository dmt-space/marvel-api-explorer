module.exports = {
  swDest: 'public/sw.js',
  runtimeCaching: [
    {
      urlPattern: /iondrimbafilho/,
      handler: 'cacheFirst',
      options: {
        expiration: {
          maxEntries: 20,
        },
      },
    },
  ],
  globPatterns: ['**/*.{js,png, jpg,html,css,woff2,woff,svg}'],
  globDirectory: './public'
}
