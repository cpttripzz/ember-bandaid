import Ember from 'ember';
import config from './config/environment';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('profile');
  this.route('profiles');
  this.route('home');
  this.route('genre');
  this.route('homeitem');
  this.resource('homeitem', { path: '/homeitem/:user_slug' });
  this.resource('bands');
  this.resource('band', { path: '/band/:band_slug' });
  this.resource('band.edit', {path: '/band/:band_slug/edit' });
  this.resource('musician',{path: '/musician/:musician_slug' });
});

// make the login route only accessible when the session is not authenticated
export default Router;
