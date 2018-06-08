(function(){
  'use strict';
  angular
    .module('dogBiteV2')
    .controller('FormController', FormController);

    function FormController($log, $stateParams){
      var vm = this;
      vm.name = $stateParams.name;
      $log.log(vm.name);
    }
})();
