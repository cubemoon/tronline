require.config({
  paths: {
    jquery: 'libs/jquery-1.8.3.min',
    underscore: 'libs/underscore-1.4.3.min',
    backbone: 'libs/backbone-0.9.9.min',
    text: 'libs/requirejs-2.1.2/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['app'], function(app) {
  app.initialize();
});