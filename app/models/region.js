import DS from "ember-data";

export default DS.Model.extend({
    shortName: DS.attr('string'),
    longName: DS.attr('string'),
    slug: DS.attr('string'),
});