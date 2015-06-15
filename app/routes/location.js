import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function() {
    this._super();
    this.controllerFor('location').getLocation();
  }
});
