'use strict';

var ThingView = Backbone.View.extend({
  el: '#content',

  template: templates.thing,

  events: {
    'submit form.delete': 'delete',
    'submit form.put': 'put'
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.model.fetch();
  },

  render: function () {
    this.$el.html(this.template({
      thing: this.model.attributes
    }));
  },

  delete: function () {
    this.model.destroy({
      success: function () {
        window.location.hash = '#things';
      }
    });

    return false;
  },

  put: function (event) {
    var form = event.target;

    this.model.save({
      name: $('[name="name"]', form).val(),
      description: $('[name="description"]', form).val()
    });

    return false;
  }
});
