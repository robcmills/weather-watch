import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['location'],
  lat: Ember.computed.oneWay('controllers.location.latitude'),
  lon: Ember.computed.oneWay('controllers.location.longitude')
});
