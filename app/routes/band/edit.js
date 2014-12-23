import Ember from 'ember';
export default Ember.Route.extend({
    model: function(params){
        return this.store.find('band', params.band_slug);
    },

    serialize: function(model) {
        return {band_slug: model.get('slug')};
    },
});