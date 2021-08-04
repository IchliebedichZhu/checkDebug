import tsplugin from 'rollup-plugin-typescript2';
// import htmlplugin from '@rollup/plugin-html';
import resolveplugin from '@rollup/plugin-node-resolve';
import commonplugin from '@rollup/plugin-commonjs';
import path from 'path';

// const HTML_FILE_PATH = path.resolve(__dirname, 'index.html');

/**
 * @type {import('rollup').RollupOptions}
 */
const reactRollup = {
  input: path.resolve(__dirname, 'index.tsx'),
  output: {
    file: path.resolve(__dirname, 'dist', 'index.js'),
    name: 'HandleError',
    format: 'umd',
  },
  plugins: [
    commonplugin(),
    resolveplugin(),
    tsplugin(),
    // htmlplugin({
    //   template: templateFunction,
    // }),
  ],
  external: ['react', 'react-dom'],
};

// function templateFunction() {
//   const data = fs.readFileSync(HTML_FILE_PATH, 'utf-8');
//   return data.replace(
//     `\$\{scripts\}`,
//     `<script src="./reactWatch.js"></script>`
//   );
// }

module.exports = reactRollup;
