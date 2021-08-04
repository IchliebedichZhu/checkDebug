import tsplugin from 'rollup-plugin-typescript2';
import babelplugin from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

/**
 * @type {import('rollup').RollupOptions}
 */
const globalRollup = {
  input: path.resolve(__dirname, 'index.ts'),
  output: {
    file: path.resolve(__dirname, 'dist', 'index.js'),
    format: 'iife',
    plugins: [terser()],
  },
  plugins: [tsplugin(), babelplugin()],
};

module.exports = globalRollup;
