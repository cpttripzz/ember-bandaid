/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-bandaid',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' bandaid-api.com maxcdn.bootstrapcdn.com maps.gstatic.com maps.googleapis.com",
      'font-src': "'self' 'unsafe-inline' bandaid-api.com maxcdn.bootstrapcdn.com maps.gstatic.com",
      'connect-src': "'self' 'unsafe-inline' bandaid-api.com maps.gstatic.com maps.googleapis.com",
      'img-src': "'self' 'unsafe-inline' bandaid-api.com maxcdn.bootstrapcdn.com maps.gstatic.com",
      'style-src': "'self' 'unsafe-inline' bandaid-api.com maxcdn.bootstrapcdn.com maps.gstatic.com",
      'report-uri': "'test"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token',
    crossOriginWhitelist: ['http://bandaid-api.com']
  };
  ENV['simple-auth-token'] = {
    serverTokenEndpoint: 'http://bandaid-api.com/app_dev.php/api/open/getToken',
    identificationField: 'username',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization'
  };

  return ENV;
};
