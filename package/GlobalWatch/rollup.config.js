import tsplugin from 'rollup-plugin-typescript2';
import babelplugin from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';

/**
 * @type {import('rollup').RollupOptions}
 */
const globalRollup = {
  input: path.resolve(__dirname, 'index.ts'),
  output: {
    file: path.resolve(__dirname, 'dist', 'index.js'),
    name: 'handleWatch',
    format: 'umd',
    plugins: [terser()],
  },
  plugins: [tsplugin(), babelplugin(), commonjs()],
};

module.exports = globalRollup;
