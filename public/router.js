var Router = Backbone.Router.extend({
  execute: function () {
    if (this.view) {
      this.view
        .stopListening()
        .undelegateEvents();
    }
    Backbone.Router.prototype.execute.apply(this, arguments);
  },

  routes: {
    'things': 'things',
    'things/:guid': 'thing'
  },

  things: function () {
    this.view = new ThingsView({
      collection: new ThingsCollection()
    });
  },

  thing: function (guid) {
    this.view = new ThingView({
      model: new ThingModel({
        guid: guid
      })
    });
  }
});
