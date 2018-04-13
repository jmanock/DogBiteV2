var angular = require('angular');

var techsModule = require('./app/techs/index');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');
var form = require('./app/form');
var states = require('./app/states');
var breeds = require('./app/breeds');
var questions = require('./app/questions');
var about = require('./app/about');

require('./index.css');

angular
  .module('app', [techsModule])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('fountainForm', form)
  .component('fountainStates', states)
  .component('fountainBreeds', breeds)
  .component('fountainQuestions', questions)
  .component('fountainAbout', about);
