/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: require.resolve('tailwindcss'),
    autoprefixer: require.resolve('autoprefixer'),
  },
}; 