/** @type {import('next').NextConfig} */
const nextConfig = {
      webpack: (config, options) => {
    // Customize webpack configuration here
    return config;
  },
  module: {
    rules: [
      // other rules...

      {
        test: /\.(node)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  }
}

module.exports = nextConfig
