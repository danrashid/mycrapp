var ThingsCollection = Backbone.Collection.extend({
  url: '/api/things',
  model: ThingModel
});
