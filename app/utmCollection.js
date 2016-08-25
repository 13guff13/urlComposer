define([
  'jquery',
  'underscore',
  'backbone',
  'app/utmModel'
], function($, _, Backbone, UtmModel) {
     'use strict';

     var UtmCollection = Backbone.Collection.extend({
       model: UtmModel,
       initialize: function (options) {
       },

       getUtmString: function () {
         var utmString = '';
         var utmList = [];

         utmList = this.map(
           function (utmModel) {
             return utmModel.getUtmString();
            });

         if (utmList.length > 0) {
           utmString += '?';
           utmString += utmList.join('&');
         }

         return utmString;
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
     return UtmCollection;
   });

