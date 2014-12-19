import DS from "ember-data";
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    slug: DS.attr('string'),
    createdAt: DS.attr('string'),
    updatedAt: DS.attr('string'),
    type: DS.attr('string'),
    genres: DS.hasMany('genres'),
    addresses: DS.hasMany('addresses'),
    documents: DS.hasMany('documents'),
    musicians: DS.hasMany('musicians'),
    userId: DS.attr('number'),
    useritems: DS.belongsTo('useritem'),
    bandImgUrl: function() {

        var docPath ='6d319191fe4df512760df8e65402468130ff6b8f.jpeg';
        if(Ember.typeOf(this.get('documents').objectAt(0)) != 'undefined') {
            docPath = this.get('documents').content.objectAt(0)._data.path;
        }
        return this.const.path +'/img/users/' + docPath;
    }.property('src')


});

//
//
//export default DS.Store.extend({
//    adapter: 'BandAdapter'
//});

