module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['html', 'mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.html$/,
            use: 'html-loader'
          }
        ]
      }
    }
    return config
  }
}