(function() {
  'use strict';

  angular
    .module('dogBiteV2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    // vm.something=true;
    // vm.records = [
    //   {name:'Jon Smith', city:'Manhattan', state:'Ny'},
    //   {name:'Maria Rodriguez', city:'Brooklyn', state:'Ny'},
    //   {name:'Michael Garcia', city:'Queens', state:'Ny'}
    // ];
    // vm.add = function($index) {
    //   vm.records.push({name:'', city:'', state:''});
    // }
    // vm.remove = function(record, $index){
    //   vm.records.splice($index,1);
    //   $log.log(record);
    // }
    // vm.edit = function($event,$index){
    //   //should only be able to edit one row
    //   //vm.something=false;
    //   $log.log($event, $index);
    // }
    vm.model = {
      contacts:[
        {id:1, name:'Ben', age:28},
        {id:2, name:'Sally', age:24},
        {id:3, name:'John', age:32},
        {id:4, name:'Jane', age:40}
      ],
      selected:{}
    };
    vm.getTemplate = function(contact){
      if(contact.id === vm.model.selected.id){
        return 'edit';
      }else{
        return 'display';
      }
    };
    vm.editContact = function(contact){
      vm.model.selected = angular.copy(contact);
    };
    vm.saveContact = function(idx){
      $log.log('Saving contact');
      vm.model.contact[idx] = angular.copy(vm.model.selected);
      vm.reset();
    };
    vm.reset = function(){
      vm.model.selected = {};
    };
  }
})();
