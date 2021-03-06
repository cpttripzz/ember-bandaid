import DS from "ember-data";
import Ember from 'ember';
var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://bandaid-api.com/app_dev.php',
    namespace: 'api/secure'
});

var inflector = Ember.Inflector.inflector;

inflector.irregular('address', 'addresses');
inflector.irregular('country', 'countries');
inflector.irregular('city', 'cities');

export default ApplicationAdapter;
