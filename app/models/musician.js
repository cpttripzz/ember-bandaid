import DS from "ember-data";

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
    instruments: DS.hasMany('instruments'),
    musicianImgUrl: function() {
        return this.const.path +'/img/users/' + this.get('documents').content.objectAt(0)._data.path;
    }.property('src'),
    musicianSmallImgUrl: function() {
        return this.const.path +'/media/cache/resolve/assoc/img/users/' + this.get('documents').content.objectAt(0)._data.path;
    }.property('src')


});

//
//
//export default DS.Store.extend({
//    adapter: 'BandAdapter'
//});

