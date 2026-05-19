/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        port: '',
        pathname: '/images/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: '30.media.tumblr.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
