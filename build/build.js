'use strict';

/* global require, exports */
var utils = require('utils');
var sh = new utils.Commander('sh');

var BookmarkAppBuilder = function() {
};

BookmarkAppBuilder.prototype.execute = function(options) {
  sh.initPath(utils.getEnvPath());
  sh.run(['-c', 'cd ' + options.APP_DIR + ' && bower install']);
  utils.copyToStage(options);
};

exports.execute = function(options) {
  (new BookmarkAppBuilder()).execute(options);
};
