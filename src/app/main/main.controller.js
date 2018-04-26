(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;


    vm.records = [
      {name:'Jon Smith', city:'Manhattan', state:'Ny'},
      {name:'Maria Rodriguez', city:'Brooklyn', state:'Ny'},
      {name:'Michael Garcia', city:'Queens', state:'Ny'}
    ];
    vm.add = function($index) {
      vm.records = ({name:'', city:'', state:''});
    }
    vm.remove = function(record, $index){
      vm.records.splice($index,1);
      $log.log(record);
    }

  }
})();
