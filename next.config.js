module.exports = {
  images: {
    domains: [
      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSevI5MxX0yErYi-Mg9SL8sZZttIE3TnbR-joopMHQbs4-yEQnSPXgLk1HTzKl4JjwEw&usqp=CAU"
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/old-blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
      {
        source: '/:path((?!uk/).*)',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: 'GB',
          },
        ],
        permanent: false,
        destination: '/uk/:path*',
      },
    ];
  },
};