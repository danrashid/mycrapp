'use strict';

var ThingModel = Backbone.Model.extend({
  urlRoot: '/api/things',
  idAttribute: 'guid'
});
