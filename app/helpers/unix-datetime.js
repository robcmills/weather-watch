
export default Ember.Handlebars.makeBoundHelper( function(value, options) {
  var formatted = moment.unix(value).format('YYYY-DD-MMTHHmm');
  return new Ember.Handlebars.SafeString(formatted);
});