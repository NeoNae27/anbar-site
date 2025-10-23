/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'anbar-site';

const nextConfig = {
  // basePath: isProd ? `/${repoName}` : '',
  // assetPrefix: isProd ? `/${repoName}/` : '',
  // images: {
  //   unoptimized: true,
  // },
  output: 'export',
};

export default nextConfig;
