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
        url:'/form',
        templateUrl:'app/form/form.html',
        controller:'FormController',
        controllerAs:'form'
      })
      .state('summary', {
        url:'/summary',
        templateUrl:'app/form/summary.html',
        controller:'SummaryController',
        controllerAs:'summary',
        params:{'dogs':null}
      })
      .state('insurance', {
        url:'/insurance',
        templateUrl:'app/form/insurance.html',
        controller:'InsuranceController',
        controllerAs:'insurance',
        params:{'dog':null, 'ins':null}
      });

    $urlRouterProvider.otherwise('/');
  }

})();
