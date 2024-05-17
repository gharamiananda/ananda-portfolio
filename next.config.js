/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(node)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'path',
            value: '.+', // Matches any non-empty value
          },
        ],
        permanent: true,
        destination: ({ params, query }) => {
          // Remove unwanted characters from the path
          const cleanedPath = params.path.replace(/[%20%]/g, '').replace(/ /g, '');
          return `/${cleanedPath}`;
        },
      },
      {
        source: '/:path*',
        destination: ({ params }) => {
          // General cleanup for any unwanted characters
          const cleanedPath = params.path.replace(/[%20%]/g, '').replace(/ /g, '');
          return `/${cleanedPath}`;
        },
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
