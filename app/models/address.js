import DS from "ember-data";

export default DS.Model.extend({
    address: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date')
});