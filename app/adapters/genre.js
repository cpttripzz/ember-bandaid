import DS from "ember-data";

var GenreAdapter = DS.RESTAdapter.extend({
    host: 'http://bandaid-api.com/app_dev.php',
    namespace: 'api/open'

});

export default GenreAdapter;
