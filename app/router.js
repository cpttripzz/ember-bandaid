import Ember from 'ember';
import config from './config/environment';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  // protected route that's inaccessible without authentication
  this.route('protected');
});
// make this route protected
Ember.ProtectedRoute = Ember.Route.extend(AuthenticatedRouteMixin);
// make the login route only accessible when the session is not authenticated

export default Router;
