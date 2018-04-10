var angular = require('angular');

var techsModule = require('./app/techs/index');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');
var form = require('./app/form');

require('./index.css');

angular
  .module('app', [techsModule])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('fountainForm', form);
