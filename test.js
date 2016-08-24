define([
  "jquery",
  "underscore",
  "backbone",
  "app/urlModel",
  "app/urlModelView",
  "app/urlCollection",
  "app/utmModel",
  "app/utmCollection",
  'app/urlUtmModel'
], function(
     $,
     _,
     Backbone,
     UrlModel,
     UrlModelView,
     UrlCollection,
     UtmModel,
     UtmCollection,
     UrlUtmModel
   ) {
     'use strict';

     var modelStringUrl = 'http://ya.ru/\n';

     var utmLinkCollection = [
       {key: 'jopa', value: 'haaah'},
       {key: 'nine', value: 'gag'},
       {key: 'place', value: 'home'}
     ];

     
     var collectionStringUrl = 'http://ya.ru/  \n'
                             + '   http://sf.com/\n'
                             + 'http://ssfsdf.fi/\n';
     var collectionUrlList = [{url: 'http://ya.ru/'},
                              {url: 'http://sf.com/'},
                              {url: 'http://ssfsdf.fi/'}];

     var urlUtmModelString = 'http://ya.ru/?jopa=haaah&nine=gag&place=home\n'
                           + 'http://sf.com/?jopa=haaah&nine=gag&place=home\n'
                           + 'http://ssfsdf.fi/?jopa=haaah&nine=gag&place=home';
     var tests = [
       function () {
         var urlModel = new UrlModel();
         urlModel.set('url', 'http://ya.ru/');
         
         return urlModel.isValid();
       },
       function  () {
         var urlModel = new UrlModel();
         urlModel.set('url', 'http:/&/ya.ru/');
         
         return !urlModel.isValid();
       },
       function () {
         var urlCollection = new UrlCollection();

         return _.isEqual(urlCollection.stringToList(collectionStringUrl), collectionUrlList);
       },
       function () {
         var urlCollection = new UrlCollection();

         return _.isEqual(urlCollection.stringToList(''), []);
       },
       function () {
         var utmModel = new UtmModel();
         utmModel.set({key: 'jopa', value: 'haaah'});
         
         return _.isEqual(utmModel.getUtmString(), 'jopa=haaah');
       },
       function () {
         var utmLinkStringCollection = '?jopa=haaah&nine=gag&place=home';
         var utmCollection = new UtmCollection();
         utmCollection.add(utmLinkCollection);
         
         return _.isEqual(utmCollection.getUtmString(), utmLinkStringCollection);
       },
       function () {
         var urlCollection = new UrlCollection();
         urlCollection.add(collectionUrlList);
         var utmCollection = new UtmCollection();
         utmCollection.add(utmLinkCollection);
         var urlUtmModel = new UrlUtmModel({
           urlCollection: urlCollection,
           utmCollection: utmCollection
         });

         return _.isEqual(urlUtmModel.getUrlUtmString(), urlUtmModelString);
       }
     ];

     function runTests () {
       var failTestList = _.filter(
         tests,
         function (test) {
           var done = false;

           done = test();
           
           return !done;
         });

       if (failTestList.length > 0) {
         console.log('!!!!!! fail ' + failTestList.length + ' test.');
         console.log(failTestList.toString());
       } else {
         console.log('!!!!!! DONE all tests.');
       }
     }

     runTests();

     return function ($el) {
       var urlModel = new UrlModel();

       var url = new UrlModelView({
         model: urlModel,
         el: $el
       });
     };
   });