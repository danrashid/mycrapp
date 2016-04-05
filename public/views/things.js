'use strict';

var ThingsView = Backbone.View.extend({
  el: '#content',

  template: templates.things,

  events: {
    'click [data-delete-guid]': 'delete',
    'submit form': 'post'
  },

  initialize: function () {
    this.listenToOnce(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'update', this.render);
    this.collection.fetch();
  },

  render: function () {
    this.$el.html(this.template({
      things: _.pluck(this.collection.models, 'attributes')
    }));
  },

  delete: function (event) {
    var guid = $(event.target).data('deleteGuid');

    this.collection.get(guid).destroy();

    return false;
  },

  post: function (event) {
    var form = event.target;

    this.collection.create({
      name: $('[name="name"]', form).val(),
      description: $('[name="description"]', form).val()
    }, {wait: true});

    return false;
  }
});
