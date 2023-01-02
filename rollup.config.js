import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';
import typescript from '@rollup/plugin-typescript';
import { terser } from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

export default [
  {
    input: './src/lib/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
        // name: 'react-lib'
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      postcss({
        extensions: ['.css', '.scss']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/prop-types/index.js': [
            'number',
            'string',
            'func',
            'oneOfType',
            'node'
          ]
        }
      }),
      visualizer(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  }
]