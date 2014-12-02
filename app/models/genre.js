import DS from "ember-data";
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string'),
    slug: DS.attr('string'),
    genreImgUrl: function() {
        return this.const.path +'/media/cache/thumb/img/genres/' + this.get('slug') + '.jpg';

    }.property('src')
});

