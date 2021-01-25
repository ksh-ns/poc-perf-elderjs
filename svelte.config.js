const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [
    sveltePreprocess({
      defaults: { style: 'postcss' },
      postcss: require('./postcss.config'),
    }),
  ],
  compilerOptions: {
    css: false,
  },
};
