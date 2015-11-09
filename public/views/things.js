var ThingsView = Backbone.View.extend({
  el: '#content',

  template: templates.things,

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
    this.collection.fetch();
  },

  render: function() {
    this.$el.html(this.template({
      things: this.collection.toJSON()
    }));
  }
});
