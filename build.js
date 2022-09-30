#!/usr/bin/env node
/* eslint-disable */

const cssModulesPlugin = require('esbuild-css-modules-plugin');

const watch = process.argv[process.argv.length - 1] === '--watch';

require("esbuild").build({
  logLevel: 'info',
  entryPoints: ['app/javascript/application.tsx'],
  bundle: true,
  sourcemap: true,
  publicPath: 'assets',
  outdir: 'app/assets/builds',
  watch: watch,
}).catch((e) => console.log(e));
