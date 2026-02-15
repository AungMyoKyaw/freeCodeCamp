/**
 * freeCodeCamp Server
 *
 * Main application server file.
 *
 * Usage:
 * - Development: `npm start` or `node server/server.js`
 * - Production: `npm run start-production`
 *
 * @module server
 */

'use strict';

require('dotenv').load();

// Initialize Opbeat for error monitoring (if configured)
if (process.env.OPBEAT_ID) {
  console.log('Loading Opbeat monitoring...');
  require('opbeat').start({
    appId: process.env.OPBEAT_ID,
    organizationId: process.env.OPBEAT_ORG_ID,
    secretToken: process.env.OPBEAT_SECRET
  });
}

var _ = require('lodash'),
    Rx = require('rx'),
    loopback = require('loopback'),
    boot = require('loopback-boot'),
    expressState = require('express-state'),
    path = require('path'),
    setupPassport = require('./component-passport');

// Polyfill for webpack bundle splitting
const requireProto = Object.getPrototypeOf(require);
if (!requireProto.hasOwnProperty('ensure')) {
  Object.defineProperties(
    requireProto,
    {
      ensure: {
        value: function ensure(modules, callback) {
          callback(this);
        },
        writable: false,
        enumerable: false
      }
    }
  );
}

Rx.config.longStackSupport = process.env.NODE_DEBUG !== 'production';

var app = loopback();
var isBeta = !!process.env.BETA;

expressState.extend(app);
app.set('state namespace', '__fcc__');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(loopback.token());
app.disable('x-powered-by');

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV
});

setupPassport(app);

/**
 * Start the server
 * @returns {void}
 */
app.start = _.once(function() {
  var server = app.listen(app.get('port'), function() {
    app.emit('started');
    console.log(
      'freeCodeCamp server listening on port %d in %s mode',
      app.get('port'),
      app.get('env')
    );
    if (isBeta) {
      console.log('freeCodeCamp is running in beta mode');
    }
  });

  // Graceful shutdown handling
  process.on('SIGTERM', function() {
    console.log('Received SIGTERM, shutting down gracefully...');
    server.close(function() {
      console.log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGINT', function() {
    console.log('Received SIGINT, shutting down gracefully...');
    server.close(function() {
      console.log('Server closed');
      process.exit(0);
    });
  });

  return server;
});

module.exports = app;

// Start the server if `$ node server.js`
// In production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
