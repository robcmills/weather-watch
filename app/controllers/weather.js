import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['location'],
  queryParams: ['lat', 'lon', 'start', 'end'],
  apiKey: '5074b6f4157fe2178602f818e15e7c9b', // openWeatherMap
  apiBase: "http://api.openweathermap.org/data/2.5/history/city",
  startAt: null,
  endAt: null,
  // lat: Ember.computed.oneWay('controllers.location.latitude'),
  // lon: Ember.computed.oneWay('controllers.location.longitude'),

  unixStart: function() {
    var startAt = this.get('startAt');
    return (startAt ? moment(startAt).unix() : undefined);
  }.property('startAt'),
  unixEnd: function() {
    var endAt = this.get('endAt');
    return (endAt ? moment(endAt).unix() : undefined);
  }.property('endAt'),

  apiQueryParams: function() {
    var queryParams = [],
      lat = this.get('lat'), lon = this.get('lon'),
      start = this.get('unixStart'), end = this.get('unixEnd');
    queryParams.push('APPID=' + this.get('apiKey'));
    if(lat){ queryParams.push('lat=' + this.get('lat')); }
    if(lon){ queryParams.push('lon=' + this.get('lon')); }
    if(start){ queryParams.push('start=' + this.get('unixStart')); }
    if(end){ queryParams.push('end=' + this.get('unixEnd')); }
    return queryParams.join('&');
  }.property('lat', 'lon', 'unixStart', 'unixEnd'),

  apiUrl: function() {
    return this.get('apiBase') + '?' + this.get('apiQueryParams');
  }.property('apiBase', 'apiQueryParams'),

  actions: {
    update: function() {
      console.log('update');
      var self = this;
      this.set('jqxhr', Ember.$.getJSON(this.get('apiUrl'), function(json) {
          console.log('success', json);
        }).done(function(json) {
          console.log('done', json);
          self.set('content', json);
        }).fail(function(jqxhr, textStatus, error) {
          console.log('fail', textStatus, error);
        }).always(function() {
          console.log('always');
        })
      );
    }
  }
});
