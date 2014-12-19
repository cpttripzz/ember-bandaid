import Ember from 'ember';

export default Ember.View.extend({
    layoutName: 'band',
    isEditable: function() {
        var userId =this.get('session.userId');
        return this.get('userId') === userId;
    }.property('userId')
});