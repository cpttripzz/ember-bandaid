import Ember from 'ember';
export default Ember.ObjectController.extend({
    needs: ['band'],
    allGenres: function(){
        var genres = this.store.find('genre');
        return genres;
        //this.get("controllers.application").findAllGenres();
    }.property('model'),
    actions: {
        bandSave: function(){
            var band = this.get('model');
            // this will tell Ember-Data to save/persist the new record
            band.save();
            // then transition to the current user
            this.transitionToRoute('band', band);
        }
    }
});