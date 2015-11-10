var Router = Backbone.Router.extend({
  routes: {
    'things': 'things',
    'things/:guid': 'thing'
  },

  things: function() {
    new ThingsView({
      collection: new ThingsCollection()
    });
  },

  thing: function(guid) {
    new ThingView({
      model: new ThingModel({
        guid: guid
      })
    });
  }
});
