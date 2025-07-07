import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';
import { dts } from 'rollup-plugin-dts';
import * as pkg from './package.json' with { type: "json" };

const config = [
  {
    input: './src/lib/index.js',
    output: [
      {
        file: pkg.default.main,
        format: 'cjs'
      },
      {
        file: pkg.default.module,
        format: 'esm'
      }
    ],
    plugins: [
      external(),
      postcss({
        extensions: ['.css', '.scss']
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      resolve(),
      commonjs(),
      visualizer()
    ],
  },
  {
    input: './types/index.d.ts',
    output: {
      file: pkg.default.types,
      format: 'es'
    },
    plugins: [dts()]
  }
];

export default config;
