require.config({
  baseUrl: "/",
  paths: {
    underscore: 'lib/lodash',
    jquery: 'lib/jquery',
    backbone: 'lib/backbone',
    twig: 'lib/twig',
    tpl: 'lib/requirejs-twig'
  },
  shim: {
    backbone: {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['underscore', 'jquery'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
    }
  },

  waitSeconds: 150
});
