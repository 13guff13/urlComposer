define([
  "jquery",
  "underscore",
  "backbone",
  "tpl!template",
  "app/urlModel",
  "backboneValidation"
], function($, _, Backbone, template, UrlModel) {
     'use strict';

     var UrlModelView = Backbone.View.extend({
       events: {
         'keyup': 'changeText'
       },
       initialize: function (options) {
         var __this = this;
         this.el = options.el;
         this.model.on("invalid", function(model, error) {
           debugger;
           __this.$el.addClass('error');
         });
         
         this.listenTo(
           this.model,
           "change",
           _.debounce(function () {
             console.log('jopa');
             if (this.model.isValid()) {
               __this.$el.removeClass('error');
             }
           }, 200));
       },
       changeText: function (e) {
         debugger;

         this.model.set('url', $(e.target).val());
       },
       template: template
     });
     return UrlModelView;
   });

