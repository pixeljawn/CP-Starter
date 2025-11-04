// postcss.config.js
// https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 2, // Adjust stage as needed

    }),
    // Add other PostCSS plugins here
  ],
};