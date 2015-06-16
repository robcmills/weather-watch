import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['api'],
  graphData: [
    {'x': 1, 'y': 4},
    {'x': 2, 'y': 8},
    {'x': 3, 'y': 6},
  ]
});
