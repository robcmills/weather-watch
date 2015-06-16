import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['weather'],
  model: Ember.computed.oneWay('controllers.weather.json.list'),
  itemController: 'weather',

  K2F: function(kelvin) {
    return (kelvin - 273.15) * 1.8 + 32.0;
  },

  graphData: function() {
    var self = this;
    return this.map(function(item) {
      return { 
        'x': item.get('model.dt'), 
        'y': self.K2F(item.get('model.main.temp'))
      };
    });
  }.property('model')
});
