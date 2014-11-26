import DS from "ember-data";
var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://bandaid.com/app_dev.php',
    namespace: 'api'
});

export default ApplicationAdapter;
