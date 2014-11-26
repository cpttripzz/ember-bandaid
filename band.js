import DS from "ember-data";

var BandAdapter = DS.RESTAdapter.extend({
    host: 'http://bandaid.com/app_dev.php',
    namespace: 'api',
    findAll: function(store,type,id){
        return this.ajax('http://bandaid.com/app_dev.php/api/homeitems','GET');
    }
});

export default BandAdapter;