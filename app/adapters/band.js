import DS from "ember-data";

var BandAdapter = DS.RESTAdapter.extend({
    host: 'http://bandaid.com/app_dev.php',
    namespace: 'api/open'

});

export default BandAdapter;