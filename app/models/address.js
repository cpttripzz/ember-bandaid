import DS from "ember-data";
import Ember from 'ember';

export default DS.Model.extend({
    address: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date'),
    cities: DS.hasMany('cities'),
    countries: DS.hasMany('countries'),
    regions: DS.hasMany('regions'),
    addressImgUrl: function() {
        var countryCode = 'us';
        if(Ember.typeOf(this.get('countries').objectAt(0))!= 'undefined')
        {
            countryCode = this.get('countries').objectAt(0)._data.code.toLowerCase();

        }
        return this.const.path +'/media/cache/thumb/img/flags/' + countryCode + '.png';

    }.property('src'),
    displayName: function() {
        var regionName = '';
        var countryName = '';
        var cityName = '';
        if(Ember.typeOf(this.get('regions').objectAt(0)) != 'undefined') {
            if(this.get('regions').objectAt(0)._data.longName !== '')
            {
                regionName = this.get('regions').objectAt(0)._data.longName;
            } else if(this.get('regions').objectAt(0)._data.shortName !== ''){
                regionName = this.get('regions').objectAt(0)._data.shortName;
            }
        }
        if(Ember.typeOf(this.get('countries').objectAt(0))!= 'undefined')
        {
            countryName = this.get('countries').objectAt(0)._data.name;
        }

        if(Ember.typeOf(this.get('cities').objectAt(0))!= 'undefined') {
            cityName = this.get('cities').objectAt(0)._data.name;
        }
        if(regionName){
            return cityName + ', ' + regionName + ', ' + countryName;
        } else {
            return cityName + ', ' + countryName;
        }
        return cityName + ', ' + regionName + ', ' + countryName;
    }.property('regions', 'countries','cities'),
    countryName: function() {
        var countryName = '';

        if(Ember.typeOf(this.get('countries').objectAt(0))!= 'undefined')
        {
            countryName = this.get('countries').objectAt(0)._data.name;
        }

        return countryName;
    }.property('countries')
});