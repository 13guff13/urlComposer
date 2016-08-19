define([
  "jquery",
  "underscore",
  "backbone",
  "tpl!template",
  "backboneValidation"
], function($, _, Backbone, template) {
     'use strict';
debugger;

     return function ($el) {
       _.extend(Backbone.Validation.callbacks, {
         valid: function (view, attr, selector) {
debugger;
         },
         invalid: function (view, attr, error, selector) {
debugger;
         }
       });

       var UrlModel = Backbone.Model.extend({
         defaults: {
           url: ''
         },
//         initialize: function (options) {
  //       },
         validation: {
           url: {
             required: true,
             pattern: 'url',
             msg: 'Please enter a valid url.'
           }
         },
         validate: function (attrs, options) {
           var urlRegexp = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
           if (!urlRegexp.test(attrs.url)) {
             return 'the URL doesn\'t be empty.';
           }
         }
       });

       var urlModel = new UrlModel();

       var UrlView = Backbone.View.extend({
         events: {
           'keyup': 'changeText'
         },
         initialize: function (options) {
           var __this = this;
           this.el = options.el;
           this.model.on("validated:invalid", function(model, error) {
             debugger;
             __this.$el.addClass('error');
           });
           this.model.on("invalid", function(model, error) {
             debugger;
             __this.$el.addClass('error');
           });
           
           this.listenTo(this.model, "change", _.debounce(function () {
console.log('jopa');
             if (this.model.isValid()) {
               __this.$el.removeClass('error');
             }
           }, 200));
debugger;
//           Backbone.Validation.bind(this);
         },
         changeText: function (e) {
           debugger;

           this.model.set('url', $(e.target).val());
         },
         template: template,
         remove: function() {
           // Remove the validation binding
           // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/unbinding
           Backbone.Validation.unbind(this);
           return Backbone.View.prototype.remove.apply(this, arguments);
         }
//         render: function() {
  //         this.$el.val(this.template(this.model.attributes));
    //       return this;
      //   }

       });
debugger;
       var url = new UrlView({
         model: urlModel,
         el: $el
       });
     };
   });