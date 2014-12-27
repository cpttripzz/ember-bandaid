import DS from "ember-data";

var BandAdapter = DS.RESTAdapter.extend({
    host: 'http://bandaid-api.com/app_dev.php',
    namespace: 'api/open',
    updateRecord: function(store, type, record) {
        var data = {};
        var serializer = store.serializerFor(type.typeKey);

        serializer.serializeIntoHash(data, type, record);

        var id = record.id;

        return this.ajax('http://bandaid-api.com/app_dev.php/api/secure/band/'+id, "PUT", { data: data });
    },


});

export default BandAdapter;