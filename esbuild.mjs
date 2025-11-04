// esbuild.config.js
import autoprefixer from 'autoprefixer';
import * as esbuild from 'esbuild';
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from 'postcss';
const postcssPresetEnv = require('postcss-preset-env')




import pkg from './package.json' with { type: 'json' };

const banner = `/*! ${pkg.name} v${pkg.version} | (c) ${pkg.author} | ${pkg.repository.url} */`;




await esbuild
  .build({
    entryPoints: ["src/style.scss"],
    outdir: "dist/",
    metafile: true,
    bundle: true,
    write: true,
    minify: false,
    banner: {
      css: banner,
    },
    plugins: [
      sassPlugin({
        async transform(source) {
          const { css } = await postcss([autoprefixer, postcssPresetEnv({ stage: 2 })]).process(source, {
            from: undefined,
          });
          return css;
        },
      }),
    ],
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));