import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.Constant = Ember.Object.extend({
    path: 'http://bandaid-api.com'
});


App.initializer({
  name: 'const',
  initialize: function(container, application) {
    application.register('constants:main', App.Constant, {
      singleton: true,
      instantiate: true
    });

    application.inject('controller', 'const', 'constants:main');
    application.inject('view', 'const', 'constants:main');
    application.inject('model', 'const', 'constants:main');
    application.inject('adapter', 'const', 'constants:main');
    application.inject('route', 'const', 'constants:main');
  }
});
loadInitializers(App, config.modulePrefix);

export default App;
