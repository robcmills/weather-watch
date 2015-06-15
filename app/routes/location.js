import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function() {
    this._super();
    console.log('location setupController');
    this.controllerFor('location').getLocation();
  }
});
