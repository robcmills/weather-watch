import Ember from 'ember';

export default Ember.Controller.extend({
  isGeolocationSupported: true,
  latitude: null,
  longitude: null,

  getLocation: function() {
    var self = this;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        self.setPosition(position);
      });
    } else {
      this.set('isGeolocationSupported', false);
    }
  },
  setPosition: function(position) {
    this.setProperties({
      'latitude': position.coords.latitude,
      'longitude': position.coords.longitude
    });
  }
});
