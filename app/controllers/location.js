import Ember from 'ember';

export default Ember.Controller.extend({
  isGeolocationSupported: true,
  isLocating: false,
  latitude: Ember.computed.alias('position.coords.latitude'),
  longitude: Ember.computed.alias('position.coords.longitude'),
  position: null,

  mapUrl: function(){ 
    var lat = this.get('latitude');
    var longitude = this.get('longitude');
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=%@,%@&zoom=14&size=400x300&sensor=false".fmt(lat, longitude);
    return url;
  }.property('latitude', 'longitude'),

  getLocation: function() {
    if(!this.get('isGeolocationSupported')) { return; }
    var self = this;
    this.set('isLocating', true);
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        self.set('position', position);
        self.set('isLocating', false);
      }, self.showError);
    } else {
      this.set('isGeolocationSupported', false);
    }
  },
  showError: function(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
      console.error("User denied the request for Geolocation.");
      break;
      case error.POSITION_UNAVAILABLE:
      console.error("Location information is unavailable.");
      break;
      case error.TIMEOUT:
      console.error("The request to get user location timed out.");
      break;
      case error.UNKNOWN_ERROR:
      console.error("An unknown error occurred.");
      break;
    }
    this.set('isLocating', false);
  },
  actions: {
    useCurrent: function() {
      this.getLocation();
    }
  }
});
