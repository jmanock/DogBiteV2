(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope, $state, $log) {
    var vm = this;
    
    vm.test = function(){
      $scope.myCheck = true;
      $scope.nextCheck = true;
      vm.personInfo = true;
      vm.dogInfo = true;
    };

    vm.Next = function(){
      vm.personInfo = true;
      vm.dogInfo = true;
    };

    $scope.title='UI-Router';
    $scope.tabs = ['tab1', 'tab2'];
    $scope.currentIndex = 0;
    $scope.maxIndex = $scope.tabs.length;
    $scope.transition = 'slide-left';

    vm.next = function(){
      $log.log('hi');
    };

      }
})();
