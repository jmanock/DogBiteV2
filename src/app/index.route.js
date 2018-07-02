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
      .state('about', {
        url:'/about',
        templateUrl:'app/main/about.html'
      })
      .state('privacy', {
        url:'/privacy',
        templateUrl:'app/main/privacy.html'
      })
      .state('questions', {
        url:'/questions',
        templateUrl:'app/main/questions.html'
      })
      .state('terms', {
        url:'/terms',
        templateUrl:'app/main/terms.html'
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
        params:{'dog':null, 'insurance':null}
      })
      .state('total', {
        url:'/total',
        templateUrl:'app/form/total.html',
        controller:'TotalController',
        controllerAs:'total',
        params:{'insurance':null, 'dog':null}
      });

    $urlRouterProvider.otherwise('/');
  }

})();
