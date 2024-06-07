const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/nhom8plus1/' : '',
  basePath: isProd ? '/nhom8plus1' : '',
};
