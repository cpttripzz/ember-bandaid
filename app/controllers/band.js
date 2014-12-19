import Ember from 'ember';

export default Ember.ObjectController.extend({

        isEditable: function() {
            var userId =this.get('session.userId');
            return this.get('userId') === userId;
        }.property('userId')


});