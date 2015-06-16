
export default Ember.Handlebars.makeBoundHelper( function(value, options) {
  console.log('datetime', value, options);
  // var escaped = Ember.Handlebars.Utils.escapeExpression(value);
  var formatted = moment.unix(value).format('YYYY-DD-MMTHHmm');
  return new Ember.Handlebars.SafeString(formatted);
});