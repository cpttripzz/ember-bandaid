import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    slug: DS.attr('string'),
    instrumentImgUrl: function() {
        return this.const.path +'/media/cache/thumb/img/instruments/' + this.get('slug') + '.jpg';
    }.property('src')
});