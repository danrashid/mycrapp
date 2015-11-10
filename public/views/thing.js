var ThingView = Backbone.View.extend({
  el: '#content',

  template: templates.thing,

  events: {
    'submit form': 'put'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.model.fetch();
  },

  render: function() {
    this.$el.html(this.template({
      thing: this.model.toJSON()
    }));
  },

  put: function(event) {
    var form = event.target;

    this.model.save({
      name: $('[name="name"]', form).val(),
      description: $('[name="description"]', form).val()
    });

    return false;
  }
});
