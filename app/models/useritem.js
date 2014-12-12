import DS from "ember-data";
export default DS.Model.extend({
    bands: DS.hasMany('bands')
});