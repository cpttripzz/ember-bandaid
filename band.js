import DS from "ember-data";

var UserItemsAdapter = DS.RESTAdapter.extend({
    findAll: function(store,type,id){
        var userBands = this.ajax('http://bandaid.com/app_dev.php/api/user/bands','GET');
        return userBands;
    }
});

export default UserItemsAdapter;