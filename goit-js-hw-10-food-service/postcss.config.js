const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer],
  rules: [
    { test: /\.hbs$/, exclude: /node_modules/, use: 'handlebars-loader' },
  ],
};
