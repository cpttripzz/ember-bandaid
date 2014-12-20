import Ember from 'ember';
export default Ember.ObjectController.extend({
    actions: {
        save: function(){
            debugger;
            var band = this.get('model');
            // this will tell Ember-Data to save/persist the new record
            band.save();
            this.transitionToRoute('band', band);
        },
        bandSave: function(){
            var band = this.get('model');
            // this will tell Ember-Data to save/persist the new record
            band.save();
            // then transition to the current user
            this.transitionToRoute('band', band);
        }
    }
});