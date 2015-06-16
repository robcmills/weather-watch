import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['weather'],
  model: Ember.computed.oneWay('controllers.weather.json.list'),
  itemController: 'weather'
});
