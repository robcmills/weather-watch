import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['location'],
  queryParams: ['lat', 'lon'],
  apiKey: '5074b6f4157fe2178602f818e15e7c9b', // openWeatherMap
  apiBase: "http://api.openweathermap.org/data/2.5/history/city",
  startAt: null,
  endAt: null,
  // lat: Ember.computed.oneWay('controllers.location.latitude'),
  // lon: Ember.computed.oneWay('controllers.location.longitude'),

  apiQueryParams: function() {
    var queryParams = [];
    queryParams.push('lat=' + this.get('lat'));
    queryParams.push('lon=' + this.get('lon'));
    return '&'.join(queryParams);
  }.property('lat', 'lon'),

  apiUrl: function() {
    return this.get('apiBase') + '?' + this.get('apiQueryParams');
  }.property('apiBase', 'apiQueryParams'),

  actions: {
    update: function() {
      console.log('update');
    }
  }
});
