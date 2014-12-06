import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr('string'),
    slug: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),

});