define([
  'underscore',
  'app/urlComposer/UrlModel',
  'app/urlComposer/UrlModelView'
], function (
     _,
     UrlModelView,
     UrlModelView
   ) {
     'use strict';

     var common = {};

     common.restore = function restore(done) {};
     common.setup = function setup(done) {
       require.undef(
         'app/urlComposer/UrlModel',
         'app/urlComposer/UrlModelView');
       require([
         'app/urlComposer/UrlModel',
         'app/urlComposer/UrlModelView'
       ], function (UrlModelView, UrlModel) {
            common.UrlModelView = UrlModelView;
            common.UrlModel = UrlModel;

            if (_.isFunction(done)) {
              done();
            }
          }.bind(this));
     };

     return common;
   })