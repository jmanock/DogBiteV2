(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('form', {
        templateUrl:'app/main/form.html',
        controller:'FormController',
        controllerAs:'cForm',
        params:{'name':null}
      });

    $urlRouterProvider.otherwise('/');
  }

})();
