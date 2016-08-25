define([
  'jquery',
  'underscore',
  'backbone',
  'app/urlModel',
], function($, _, Backbone, UrlModel) {
     'use strict';

     var UrlCollection = Backbone.Collection.extend({
       model: UrlModel,
       initialize: function (options) {
         this.on(this.models, 'change', function (e) {
           debugger;           
         });
       },
       stringToList: function (stringUrlList) {
         var urlList = [];
         urlList = _.map(stringUrlList.split(/\n/), function (url) {
                     return {url: url.trim()}
                   });
         urlList = _.filter(urlList, function (o) {
                     o.url.trim()
                     return !_.isEmpty(o.url);
                   });

         return urlList;
       }
     });
     return UrlCollection;
   });

