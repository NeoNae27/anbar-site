const isProd = process.env.NODE_ENV === 'production';
const repo = 'anbar.al-site';

module.exports = {
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  output: 'export',
};
