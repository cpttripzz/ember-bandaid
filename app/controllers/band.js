import Ember from 'ember';

export default
Ember.ObjectController.extend({
    needs: ["application"],
    isEditable: function () {
        var userId = this.get('session.userId');
        return this.get('userId') === userId;
    }.property('userId'),

    actions: {
        bandEdit: function () {
            var slug = this.get('slug');
            this.transitionToRoute('band.edit', slug);
        }

    }


});